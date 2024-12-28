import { Material } from '@/factories/abstract/Material.class';
import { Product } from '@/factories/abstract/Product.class';

/**
 * Implementation of Mirror Product.
 */
export class Mirror extends Product {
  constructor(width: number, height: number, materials: Material[]) {
    super(width, height, materials);
  }

  calculateCost(): number {
    const materialCosts = this.materials.reduce((total, material) => total + material.calculateCost(), 0);
    return this.width * this.height * 0.03 + materialCosts; // Example formula
  }
}
