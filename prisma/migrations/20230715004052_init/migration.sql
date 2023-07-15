-- AlterTable
ALTER TABLE `user` ADD COLUMN `birth_date` DATETIME(3) NULL,
    ADD COLUMN `google_id` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL;
