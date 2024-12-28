import { Service, ServiceType, BillingUnit } from '@/factories/abstract/Service.class';

/**
 * Generic service implementation for general use and testing purposes.
 */
export class GenericService extends Service {
  constructor(type: ServiceType, pricePerUnit: number, billingUnit: BillingUnit) {
    super(type, pricePerUnit, billingUnit);
  }

  /**
   * Calculates the total cost of the service based on the billing unit.
   *
   * @param unitsConsumed - The number of units consumed for this service.
   * @returns The total cost.
   */
  calculateCost(unitsConsumed: number): number {
    if (unitsConsumed <= 0) {
      throw new Error('The number of units consumed must be greater than zero.');
    }

    switch (this.billingUnit) {
      case 'Hour':
        return this.pricePerUnit * unitsConsumed;
      case 'Day':
        return this.pricePerUnit * unitsConsumed * 8; // Assuming 8 hours/day.
      case 'Project':
      case 'FlatRate':
        return this.pricePerUnit; // Flat rate or project-based services ignore units consumed.
      default:
        throw new Error('Invalid billing unit.');
    }
  }
}
