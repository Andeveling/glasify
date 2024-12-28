import { AbstractFactory } from '@/factories/abstract/AbstractFactory.class';
import { AluminiumWindow } from './AluminiumWindow.class';
import { Product } from '@/factories/abstract/Product.class';
import { Material, MaterialType, UnitOfMeasure } from '@/factories/abstract/Material.class';
import { GenericMaterial } from '../materials/GenericMaterial.class';
import { ServiceType, BillingUnit, Service } from '@/factories/abstract/Service.class';
import { GenericService } from '../services/GenericService.class';

/**
 * Factory for Aluminium Windows.
 */
export class AluminiumWindowFactory implements AbstractFactory {
  createProduct(width: number, height: number, materials: Material[], services: Service[]): Product {
    return new AluminiumWindow(width, height, materials, services);
  }

  createMaterial(type: MaterialType, price: number, unitOfMeasure: UnitOfMeasure): Material {
    return new GenericMaterial(type, price, unitOfMeasure);
  }

  createService(type: ServiceType, price: number, billingUnit: BillingUnit): Service {
    return new GenericService(type, price, billingUnit);
  }
}
