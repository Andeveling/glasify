import { Material } from './Material.class';
import { Service } from './Service.class';

export abstract class Product {
  width: number;
  height: number;
  materials: Material[];
  services: Service[];

  constructor(width: number, height: number, materials: Material[], services: Service[]) {
    this.width = width;
    this.height = height;
    this.materials = materials;
    this.services = services;
  }

  /**
   * Abstract method to calculate the total cost of the product.
   * Each subclass must implement this based on specific product rules.
   */
  abstract calculateCost(): number;
}
