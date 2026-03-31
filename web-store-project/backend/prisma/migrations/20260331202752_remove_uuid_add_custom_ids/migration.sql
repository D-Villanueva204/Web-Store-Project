-- CreateEnum
CREATE TYPE "PartType" AS ENUM ('CASE', 'COOLER', 'CPU', 'GPU', 'MOBO', 'OS', 'PSU', 'RAM', 'STORAGE');

-- CreateTable
CREATE TABLE "Part" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "partType" "PartType" NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "partId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favourite" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "partId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "partId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "psu" TEXT,
    "side_panel" TEXT NOT NULL,
    "external_volume" DOUBLE PRECISION NOT NULL,
    "internal_35_bays" INTEGER NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "Storage" (
    "partId" TEXT NOT NULL,
    "capacity" DOUBLE PRECISION NOT NULL,
    "price_per_gb" DOUBLE PRECISION,
    "type" TEXT NOT NULL,
    "cache" DOUBLE PRECISION,
    "form_factor" TEXT NOT NULL,
    "interface" TEXT NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "Cooler" (
    "partId" TEXT NOT NULL,
    "rpm" TEXT NOT NULL,
    "noise_level" TEXT,
    "color" TEXT NOT NULL,
    "size" DOUBLE PRECISION,

    CONSTRAINT "Cooler_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "CPU" (
    "partId" TEXT NOT NULL,
    "core_count" INTEGER NOT NULL,
    "core_clock" DOUBLE PRECISION NOT NULL,
    "boost_clock" DOUBLE PRECISION NOT NULL,
    "microarchitecture" TEXT,
    "tdp" INTEGER NOT NULL,
    "graphics" TEXT,

    CONSTRAINT "CPU_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "GPU" (
    "partId" TEXT NOT NULL,
    "chipset" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "core_clock" DOUBLE PRECISION NOT NULL,
    "boost_clock" DOUBLE PRECISION,
    "color" TEXT NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "MOBO" (
    "partId" TEXT NOT NULL,
    "socket" TEXT NOT NULL,
    "form_factor" TEXT NOT NULL,
    "max_memory" INTEGER NOT NULL,
    "memory_slots" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "MOBO_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "OS" (
    "partId" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "max_memory" INTEGER NOT NULL,

    CONSTRAINT "OS_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "PSU" (
    "partId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "efficiency" TEXT NOT NULL,
    "wattage" INTEGER NOT NULL,
    "modular" TEXT NOT NULL,
    "color" TEXT,

    CONSTRAINT "PSU_pkey" PRIMARY KEY ("partId")
);

-- CreateTable
CREATE TABLE "RAM" (
    "partId" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "modules" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "first_word_latency" DOUBLE PRECISION NOT NULL,
    "cas_latency" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RAM_pkey" PRIMARY KEY ("partId")
);

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storage" ADD CONSTRAINT "Storage_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cooler" ADD CONSTRAINT "Cooler_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CPU" ADD CONSTRAINT "CPU_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPU" ADD CONSTRAINT "GPU_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MOBO" ADD CONSTRAINT "MOBO_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OS" ADD CONSTRAINT "OS_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PSU" ADD CONSTRAINT "PSU_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RAM" ADD CONSTRAINT "RAM_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
