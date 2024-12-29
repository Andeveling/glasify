import { AluminiumWindowFactory } from './concrete/aluminium/AluminiumWindowFactory.class';

const factory = new AluminiumWindowFactory();

const frameProfile = factory.createMaterial('Profile', 10, 'LinealMeters');
const sashProfile = factory.createMaterial('Profile', 12, 'LinealMeters');
const overlapProfile = factory.createMaterial('Profile', 8, 'LinealMeters');
const lock = factory.createMaterial('Accessories', 5, 'Units');
const wheels = factory.createMaterial('Accessories', 3, 'Units');
const glass = factory.createMaterial('Glass', 20, 'SquareMeters');

const transportationService = factory.createService('Transportation', 10, 'FlatRate');
const installationService = factory.createService('Installation', 20, 'Hour');

const aluminiumWindowFactory = new AluminiumWindowFactory();
const aluminiumWindow = aluminiumWindowFactory.createProduct(
  1.2, // width meters
  1.0, // height meters
  [frameProfile, sashProfile, overlapProfile, lock, wheels, glass],
  [transportationService, installationService]
);

console.log(aluminiumWindow.calculateCost());
