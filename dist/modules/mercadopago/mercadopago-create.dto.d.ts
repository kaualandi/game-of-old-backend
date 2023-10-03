import { Address, Order, OrderItem, Product, ProductImage, ProductVariant, User } from '@prisma/client';
export type Item = {
    product_variant: {
        product: {
            images: ProductImage[];
        } & Product;
    } & ProductVariant;
} & OrderItem;
export type MercadoPagoOrder = {
    order_items: Item[];
    address: Address;
    user: User;
} & Order;
