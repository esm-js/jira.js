export interface GetProjectsByPriorityScheme {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The project IDs to filter by. For example, `projectId=10000&projectId=10001`. */
  projectId?: number[];
  /** The priority scheme ID. */
  schemeId: string;
  /** The string to query projects on by name. */
  query?: string;
}
