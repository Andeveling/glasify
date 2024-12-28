/**
 * Enum for the type of services offered.
 */
export type ServiceType =
  | 'Consultation'
  | 'Installation'
  | 'Maintenance'
  | 'Repair'
  | 'Dismount'
  | 'Transportation'
  | undefined;

/**
 * Enum for the billing unit of services.
 */
export type BillingUnit = 'Hour' | 'Day' | 'Project' | 'FlatRate' | undefined;

/**
 * Abstract class representing a service.
 */
export abstract class Service {
  type: ServiceType;
  billingUnit: BillingUnit;
  pricePerUnit: number;

  constructor(type: ServiceType, pricePerUnit: number, billingUnit: BillingUnit) {
    this.type = type;
    this.pricePerUnit = pricePerUnit;
    this.billingUnit = billingUnit;
  }

  /**
   * Abstract method to calculate the total cost of the service
   * based on its type, unit price, and the number of units consumed.
   *
   * @param unitsConsumed - The number of units consumed for this service.
   */
  abstract calculateCost(unitsConsumed: number): number;
}
