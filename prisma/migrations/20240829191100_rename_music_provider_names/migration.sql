/*
  Warnings:

  - The values [SPOTIFY,APPLE_MUSIC,YOUTUBE_MUSIC,DEEZER] on the enum `MusicProviderName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MusicProviderName_new" AS ENUM ('spotify', 'appleMusic', 'deezer');
ALTER TABLE "MusicProviderService" ALTER COLUMN "providerName" TYPE "MusicProviderName_new" USING ("providerName"::text::"MusicProviderName_new");
ALTER TYPE "MusicProviderName" RENAME TO "MusicProviderName_old";
ALTER TYPE "MusicProviderName_new" RENAME TO "MusicProviderName";
DROP TYPE "MusicProviderName_old";
COMMIT;
