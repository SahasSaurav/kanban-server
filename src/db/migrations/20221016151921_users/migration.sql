-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "frist_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(75) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "user_role" "user_role" NOT NULL DEFAULT 'user',
    "user_status" "user_status" NOT NULL DEFAULT 'inactive',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
