import { Material, MaterialType, UnitOfMeasure } from './Material.class';
import { Product } from './Product.class';
import { Service, BillingUnit, ServiceType } from './Service.class';

export interface AbstractFactory {
  createProduct(width: number, height: number, materials: Material[], services: Service[]): Product;
  createMaterial(type: MaterialType, price: number, unitOfMeasure: UnitOfMeasure): Material;
  createService(type: ServiceType, price: number, billingUnit: BillingUnit): Service;
}
