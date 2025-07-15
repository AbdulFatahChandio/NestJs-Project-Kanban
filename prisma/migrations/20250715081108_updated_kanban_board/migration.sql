/*
  Warnings:

  - You are about to drop the column `authorId` on the `board` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "board" DROP CONSTRAINT "board_authorId_fkey";

-- DropIndex
DROP INDEX "board_title_key";

-- AlterTable
ALTER TABLE "board" DROP COLUMN "authorId",
ADD COLUMN     "creatorId" INTEGER,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "board_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "list" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "creatorId" INTEGER,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "board" ADD CONSTRAINT "board_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
