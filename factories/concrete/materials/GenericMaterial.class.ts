import { Material } from '@/factories/abstract/Material.class';

/**
 * Generic material implementation used across factories.
 */
export class GenericMaterial extends Material {
  calculateCost(): number {
    switch (this.unitOfMeasure) {
      case 'linealMeters':
        return this.price * 1.5; // Example multiplier
      case 'squareMeters':
        return this.price * 2.0; // Example multiplier
      case 'Units':
        return this.price;
      default:
        return 0;
    }
  }
}
