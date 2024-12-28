/**
 * Enum for the type of materials used in products.
 */
export type MaterialType = 'Profile' | 'Accessories' | 'Glass' | undefined;

/**
 * Enum for the unit of measure of materials.
 */
export type UnitOfMeasure = 'LinealMeters' | 'SquareMeters' | 'Units' | undefined;

/**
 * Abstract class representing a material used in a product.
 */
export abstract class Material {
  type: MaterialType;
  unitOfMeasure: UnitOfMeasure;
  price: number;

  constructor(type: MaterialType, price: number, unitOfMeasure: UnitOfMeasure) {
    this.type = type;
    this.price = price;
    this.unitOfMeasure = unitOfMeasure;
  }

  /**
   * Abstract method to calculate the cost of the material based on its type and measure.
   */
  abstract calculateCost(): number;
}
