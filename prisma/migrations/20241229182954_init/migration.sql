-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('delivery', 'installation', 'dismount');

-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('profile', 'reinforcement');

-- CreateEnum
CREATE TYPE "AccessoryType" AS ENUM ('handle', 'lock', 'hinge');

-- CreateEnum
CREATE TYPE "UnitOfMeasure" AS ENUM ('linearMeters', 'squareMeters', 'units');

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
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_services" (
    "productId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_services_pkey" PRIMARY KEY ("productId","serviceId")
);

-- CreateTable
CREATE TABLE "product_glasses" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "glassId" INTEGER NOT NULL,

    CONSTRAINT "product_glasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glasses" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "thickness" INTEGER NOT NULL,
    "pricePerM2" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "glasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_finishes" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "finishId" INTEGER NOT NULL,

    CONSTRAINT "product_finishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "additionalCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "finishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dimensions" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "dimensions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accessories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AccessoryType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unitOfMeasure" "UnitOfMeasure" NOT NULL,

    CONSTRAINT "accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_accessories" (
    "productId" INTEGER NOT NULL,
    "accessoryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_accessories_pkey" PRIMARY KEY ("productId","accessoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "product_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_materials" ADD CONSTRAINT "product_materials_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_materials" ADD CONSTRAINT "product_materials_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_services" ADD CONSTRAINT "product_services_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_services" ADD CONSTRAINT "product_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_glasses" ADD CONSTRAINT "product_glasses_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_glasses" ADD CONSTRAINT "product_glasses_glassId_fkey" FOREIGN KEY ("glassId") REFERENCES "glasses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_finishes" ADD CONSTRAINT "product_finishes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_finishes" ADD CONSTRAINT "product_finishes_finishId_fkey" FOREIGN KEY ("finishId") REFERENCES "finishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dimensions" ADD CONSTRAINT "dimensions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_accessories" ADD CONSTRAINT "product_accessories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_accessories" ADD CONSTRAINT "product_accessories_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "accessories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
