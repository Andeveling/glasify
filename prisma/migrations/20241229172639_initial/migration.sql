-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Delivery', 'Installation', 'Dismount');

-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('Profile', 'Accessories', 'Glass');

-- CreateEnum
CREATE TYPE "UnitOfMeasure" AS ENUM ('linealMeters', 'squareMeters', 'Units');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cellphoneNumber" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "minWidth" INTEGER NOT NULL,
    "minHeight" INTEGER NOT NULL,
    "maxWidth" INTEGER NOT NULL,
    "maxHeight" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials" (
    "id" SERIAL NOT NULL,
    "type" "MaterialType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unitOfMeasure" "UnitOfMeasure" NOT NULL,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_materials" (
    "productId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_materials_pkey" PRIMARY KEY ("productId","materialId")
);

-- CreateTable
CREATE TABLE "product_services" (
    "productId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_services_pkey" PRIMARY KEY ("productId","serviceId")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaterialToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MaterialToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "_MaterialToProduct_B_index" ON "_MaterialToProduct"("B");

-- AddForeignKey
ALTER TABLE "_MaterialToProduct" ADD CONSTRAINT "_MaterialToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialToProduct" ADD CONSTRAINT "_MaterialToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
