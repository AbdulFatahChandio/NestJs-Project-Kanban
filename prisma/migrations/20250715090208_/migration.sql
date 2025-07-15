/*
  Warnings:

  - You are about to drop the column `creatorId` on the `list` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "list" DROP CONSTRAINT "list_creatorId_fkey";

-- AlterTable
ALTER TABLE "list" DROP COLUMN "creatorId",
ADD COLUMN     "boardId" INTEGER;

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
