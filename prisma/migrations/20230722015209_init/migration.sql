/*
  Warnings:

  - You are about to drop the column `customization_price` on the `cartitem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cartitem` DROP COLUMN `customization_price`,
    ADD COLUMN `customization_number` INTEGER NULL;

-- AlterTable
ALTER TABLE `orderitem` ADD COLUMN `customization_price` INTEGER NULL;
