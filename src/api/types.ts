/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ServiceBase {
  /** GET all items */
  all?: any;
  /** GET single item by id */
  single?: any;
  /** POST an item */
  create?: any;
  /** PUT data to an item */
  update?: any;
  /**  DELETE an item */
  remove?: any;

  [key: string]: any;
}
