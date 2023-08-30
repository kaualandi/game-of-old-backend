import { Injectable } from '@nestjs/common';
import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { xml2js } from 'xml-js';
import { ReturnPriceDeadlineXMLConverted } from './dto/correios';

@Injectable()
export class CorreiosService {
  constructor(private readonly http: HttpService) {}

  private readonly sCepOrigem = '25953001';
  private readonly nVlPeso = 0.1;

  async priceDeadLine(priceDeadlineCorreioDto: PriceDeadlineCorreioDto) {
    const params = {
      nCdEmpresa: '',
      sDsSenha: '',
      sCepOrigem: this.sCepOrigem,
      sCepDestino: priceDeadlineCorreioDto.destination_zip_code,
      nVlPeso: this.nVlPeso * priceDeadlineCorreioDto.products_quantity,
      nCdFormato: 3, // ? 1 - caixa/pacote, 2 - rolo/prisma, 3 - envelope
      nVlComprimento: 40,
      nVlAltura: 0,
      nVlLargura: 30,
      sCdMaoPropria: 'n',
      nVlValorDeclarado: priceDeadlineCorreioDto.price,
      sCdAvisoRecebimento: 's',
      nCdServico: '', // ? 04014 - SEDEX à vista, 04510 - PAC à vista
      StrRetorno: 'xml',
      nIndicaCalculo: 3,
    };

    const responseSedex = await lastValueFrom(
      this.http.get(
        'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx',
        { params: { ...params, nCdServico: '04014' } },
      ),
    );

    const responsePac = await lastValueFrom(
      this.http.get(
        'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx',
        { params: { ...params, nCdServico: '04510' } },
      ),
    );

    const sedexResponseXml = responseSedex.data;
    const pacResponseXml = responsePac.data;

    const sedex = this.xmlToJson(sedexResponseXml).Servicos.cServico;
    const pac = this.xmlToJson(pacResponseXml).Servicos.cServico;

    return {
      sedex: {
        error: parseFloat(sedex.Erro._text),
        price: parseFloat(sedex.Valor._text.replace(',', '.')),
        deadline: sedex.PrazoEntrega._text,
      },
      pac: {
        error: parseFloat(pac.Erro._text),
        price: parseFloat(pac.Valor._text.replace(',', '.')),
        deadline: pac.PrazoEntrega._text,
      },
    };
  }

  private xmlToJson(xml: string) {
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    return xml2js(xml, options) as ReturnPriceDeadlineXMLConverted;
  }
}
