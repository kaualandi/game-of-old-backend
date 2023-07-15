/*
  Warnings:

  - You are about to drop the column `couponId` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_couponId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `couponId`,
    ADD COLUMN `coupon_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_coupon_id_fkey` FOREIGN KEY (`coupon_id`) REFERENCES `Coupon`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
