import { AbstractFactory } from '@/factories/abstract/AbstractFactory.class';
import { Material, MaterialType, UnitOfMeasure } from '@/factories/abstract/Material.class';
import { Product } from '@/factories/abstract/Product.class';
import { Mirror } from './Mirror.class';
import { GenericMaterial } from '../materials/GenericMaterial.class';

/**
 * Factory for Mirrors.
 */
export class MirrorFactory implements AbstractFactory {
  createProduct(width: number, height: number, materials: Material[]): Product {
    return new Mirror(width, height, materials);
  }

  createMaterial(type: MaterialType, price: number, unitOfMeasure: UnitOfMeasure): Material {
    return new GenericMaterial(type, price, unitOfMeasure);
  }
}
