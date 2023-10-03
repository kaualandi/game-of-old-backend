import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import mercadopagoSdk from 'mercadopago';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const mercadopagoSdk = require('mercadopago');
import { Item, MercadoPagoOrder } from './mercadopago-create.dto';

@Injectable()
export class MercadopagoService implements OnModuleInit {
  constructor(private readonly http: HttpService) {}

  private _mercadopago = mercadopagoSdk;

  async onModuleInit() {
    this._mercadopago.configure({
      access_token: process.env.MP_ACCESS_TOKEN,
    });
  }

  get mercadopago() {
    return this._mercadopago;
  }

  async createPayment(order: MercadoPagoOrder) {
    // const body = {
    //   additional_info: {
    //     items: items.map((item) => ({
    //       title: item.product_variant.product.name,
    //       description: this.getDescription(item),
    //       picture_url: item.product_variant.product.images[0].url,
    //       quantity: item.quantity,
    //       unit_price: item.product_variant.product.base_price,
    //     })),
    //     payer: {
    //       first_name: user.name.split(' ')[0],
    //       last_name: user.name.split(' ')[1] || '',
    //       email: user.email,
    //       phone: {
    //         area_code: user.phone.substring(0, 2),
    //         number: user.phone.substring(2),
    //       },
    //       address: {
    //         zip_code: address.zip_code,
    //         street_name: address.street,
    //         street_number: address.number,
    //       },
    //       shipments: {
    //         receiver_address: {
    //           zip_code: address.zip_code,
    //           street_name: address.street,
    //           street_number: address.number,
    //           floor: address.number,
    //           apartment: address.number,
    //         },
    //       },
    //     },
    //   },
    //   description: 'Mantos da CloudStore - agradecemos a preferência!',
    //   external_reference: 'MP0001',
    //   installments,
    //   metadata: {},
    //   payer: {
    //     entity_type: 'individual',
    //     type: 'customer',
    //     email: user.email,
    //     identification: {},
    //   },
    //   payment_method_id,
    //   token,
    //   transaction_amount,
    // };

    const token = await this.mercadopago.card_token.create({
      cardNumber: '4235647728025682',
      securityCode: '123',
      expirationMonth: '11',
      expirationYear: '2025',
      cardholder: {
        name: 'APRO',
        identification: {
          type: 'CPF',
          number: '12345678909',
        },
      },
    });

    console.log('token', token);

    return this.mercadopago.payment
      .save({
        token: token.body.id,
        installments: order.installments || 1,
        payer: {
          email: order.user.email,
          first_name: order.user.name.split(' ')[0],
          last_name: order.user.name.split(' ')[1] || '',
        },
        payment_method_id: 'visa',
        statement_descriptor: 'CloudStore',
        transaction_amount: order.total,
      })
      .then((payment) => {
        console.log('save', payment);
        return this.mercadopago.payment
          .capture(payment.body.id)
          .then((payment) => {
            console.log('capture', payment);
            return payment;
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private getDescription(item: Item) {
    if (item.customization) {
      return `${item.customization_name} | ${item.customization_number} - ${item.product_variant.product.description}`;
    }

    return item.product_variant.product.description;
  }
}
