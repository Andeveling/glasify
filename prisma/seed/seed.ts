import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  await prisma.user.upsert({
    where: {
      email: 'andeveling@gmail.com',
    },
    update: {
      email: 'andeveling@gmail.com',
      password: 'A123456B',
      cellphoneNumber: '+573007743602',
    },
    create: {
      email: 'andeveling@gmail.com',
      password: 'A123456B',
      cellphoneNumber: '+573007743602',
    },
  });

  // Seed Product Categories
  const categories = await prisma.productCategory.createMany({
    data: [
      { name: 'Window', description: 'Products related to windows' },
      { name: 'Mirror', description: 'Products related to mirrors' },
      { name: 'Shower', description: 'Shower-related products' },
      { name: 'Glass Door', description: 'Glass door products' },
    ],
  });
  console.log(`Seeded ${categories.count} categories`);

  // Seed Materials
  const materials = await prisma.material.createMany({
    data: [
      { type: 'profile', price: 50.0, unitOfMeasure: 'linearMeters' },
      { type: 'reinforcement', price: 30.0, unitOfMeasure: 'linearMeters' },
    ],
  });
  console.log(`Seeded ${materials.count} materials`);

  const materialsFromDb = await prisma.material.findMany();

  // Seed Services
  const services = await prisma.service.createMany({
    data: [
      { name: 'Delivery', type: 'delivery', price: 20.0 },
      { name: 'Installation', type: 'installation', price: 50.0 },
      { name: 'Dismount', type: 'dismount', price: 30.0 },
    ],
  });
  console.log(`Seeded ${services.count} services`);

  // Seed Accessories
  const accessories = await prisma.accessory.createMany({
    data: [
      { name: 'Handle', type: 'handle', price: 15.0, unitOfMeasure: 'units' },
      { name: 'Lock', type: 'lock', price: 25.0, unitOfMeasure: 'units' },
      { name: 'Hinge', type: 'hinge', price: 10.0, unitOfMeasure: 'units' },
    ],
  });
  console.log(`Seeded ${accessories.count} accessories`);

  const accessoriesFromDb = await prisma.accessory.findMany();

  // Seed Glasses
  const glasses = await prisma.glass.createMany({
    data: [
      { type: 'Tempered', thickness: 10, pricePerM2: 100.0 },
      { type: 'Laminated', thickness: 8, pricePerM2: 80.0 },
    ],
  });
  console.log(`Seeded ${glasses.count} glasses`);

  const glassesFromDb = await prisma.glass.findMany();

  // Seed Products with Materials, Accessories, and Glasses
  const categoriesFromDb = await prisma.productCategory.findMany();

  for (const category of categoriesFromDb) {
    for (let i = 0; i < 5; i++) {
      const product = await prisma.product.create({
        data: {
          name: `${category.name} - ${faker.commerce.productName()}`,
          minWidth: faker.number.int({ min: 300, max: 600 }),
          maxWidth: faker.number.int({ min: 601, max: 1200 }),
          minHeight: faker.number.int({ min: 300, max: 600 }),
          maxHeight: faker.number.int({ min: 601, max: 1200 }),
          description: faker.commerce.productDescription(),
          categoryId: category.id,
          materials: {
            create: [
              {
                materialId: faker.helpers.arrayElement(materialsFromDb).id,
                quantity: faker.number.int({ min: 1, max: 5 }),
              },
            ],
          },
          accessories: {
            create: [
              {
                accessoryId: faker.helpers.arrayElement(accessoriesFromDb).id,
                quantity: faker.number.int({ min: 1, max: 3 }),
              },
            ],
          },
          glasses: {
            create: [
              {
                glassId: faker.helpers.arrayElement(glassesFromDb).id,
              },
            ],
          },
        },
      });

      console.log(`Seeded product with ID: ${product.id}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
