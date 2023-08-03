/*
  Warnings:

  - You are about to drop the column `category_id` on the `section` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[section_id]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `section_id` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `section` DROP FOREIGN KEY `Section_category_id_fkey`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `section_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `section` DROP COLUMN `category_id`;

-- CreateIndex
CREATE UNIQUE INDEX `Category_section_id_key` ON `Category`(`section_id`);

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
