/*
  Warnings:

  - You are about to drop the `AppleMusicAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeezerAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpotifyAccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MusicProviderName" AS ENUM ('SPOTIFY', 'APPLE_MUSIC', 'YOUTUBE_MUSIC', 'DEEZER');

-- DropForeignKey
ALTER TABLE "AppleMusicAccount" DROP CONSTRAINT "AppleMusicAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "DeezerAccount" DROP CONSTRAINT "DeezerAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "SpotifyAccount" DROP CONSTRAINT "SpotifyAccount_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "AppleMusicAccount";

-- DropTable
DROP TABLE "DeezerAccount";

-- DropTable
DROP TABLE "SpotifyAccount";

-- CreateTable
CREATE TABLE "MusicProviderService" (
    "id" SERIAL NOT NULL,
    "providerName" "MusicProviderName" NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MusicProviderService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MusicProviderService_userId_key" ON "MusicProviderService"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MusicProviderService_userId_providerName_key" ON "MusicProviderService"("userId", "providerName");

-- AddForeignKey
ALTER TABLE "MusicProviderService" ADD CONSTRAINT "MusicProviderService_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
