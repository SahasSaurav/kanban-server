-- CreateTable
CREATE TABLE "board" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_by" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_created_by_key" ON "board"("created_by");

-- AddForeignKey
ALTER TABLE "board" ADD CONSTRAINT "board_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
