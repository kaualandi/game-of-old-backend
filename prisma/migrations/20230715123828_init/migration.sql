/*
  Warnings:

  - You are about to drop the `cart_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_filter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_variant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `used_coupon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart_item` DROP FOREIGN KEY `Cart_Item_cart_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart_item` DROP FOREIGN KEY `Cart_Item_product_variant_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_item` DROP FOREIGN KEY `Order_Item_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_item` DROP FOREIGN KEY `Order_Item_product_variant_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_filter` DROP FOREIGN KEY `Product_Filter_filter_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_filter` DROP FOREIGN KEY `Product_Filter_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_image` DROP FOREIGN KEY `Product_Image_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_variant` DROP FOREIGN KEY `Product_Variant_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `used_coupon` DROP FOREIGN KEY `Used_Coupon_coupon_id_fkey`;

-- DropForeignKey
ALTER TABLE `used_coupon` DROP FOREIGN KEY `Used_Coupon_user_id_fkey`;

-- DropTable
DROP TABLE `cart_item`;

-- DropTable
DROP TABLE `order_item`;

-- DropTable
DROP TABLE `product_filter`;

-- DropTable
DROP TABLE `product_image`;

-- DropTable
DROP TABLE `product_variant`;

-- DropTable
DROP TABLE `used_coupon`;

-- CreateTable
CREATE TABLE `UsedCoupon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `coupon_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `product_variant_id` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `customization` BOOLEAN NOT NULL,
    `customization_name` VARCHAR(191) NULL,
    `customization_number` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CartItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cart_id` INTEGER NOT NULL,
    `product_variant_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `customization` BOOLEAN NOT NULL,
    `customization_name` VARCHAR(191) NULL,
    `customization_price` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductFilter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `filter_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsedCoupon` ADD CONSTRAINT `UsedCoupon_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsedCoupon` ADD CONSTRAINT `UsedCoupon_coupon_id_fkey` FOREIGN KEY (`coupon_id`) REFERENCES `Coupon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `ProductVariant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `Cart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `ProductVariant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductFilter` ADD CONSTRAINT `ProductFilter_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductFilter` ADD CONSTRAINT `ProductFilter_filter_id_fkey` FOREIGN KEY (`filter_id`) REFERENCES `Filter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
