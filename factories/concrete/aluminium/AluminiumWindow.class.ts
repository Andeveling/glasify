import { Material } from '@/factories/abstract/Material.class';
import { Product } from '@/factories/abstract/Product.class';
import { Service } from '@/factories/abstract/Service.class';

/**
 * Implementation of Aluminium Window Product.
 */
export class AluminiumWindow extends Product {
  constructor(width: number, height: number, materials: Material[], services: Service[]) {
    super(width, height, materials, services);
  }
  calculateCost(): number {
    const materialCosts = this.materials.reduce((total, material) => total + material.calculateCost(), 0);
    return this.width * this.height * 0.05 + materialCosts; // Example formula
  }
}
