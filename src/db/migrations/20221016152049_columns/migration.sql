-- CreateTable
CREATE TABLE "column" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "board_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "column_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
