/** Bulk operation filter details. */
export interface IssueFilterForBulkPropertySet {
  /** The value of properties to perform the bulk operation on. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentValue?: any;
  /** List of issues to perform the bulk operation on. */
  entityIds?: number[];
  /** Whether the bulk operation occurs only when the property is present on or absent from an issue. */
  hasProperty?: boolean;
}
