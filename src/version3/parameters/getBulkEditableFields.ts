export interface GetBulkEditableFields {
  /** The IDs or keys of the issues to get editable fields from. */
  issueIdsOrKeys: string;
  /** (Optional)The text to search for in the editable fields. */
  searchText?: string;
  /** (Optional)The end cursor for use in pagination. */
  endingBefore?: string;
  /** (Optional)The start cursor for use in pagination. */
  startingAfter?: string;
}
