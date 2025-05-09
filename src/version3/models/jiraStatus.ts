import type { ProjectIssueTypes } from './projectIssueTypes';
import type { StatusScope } from './statusScope';

/** Details of a status. */
export interface JiraStatus {
  /** The description of the status. */
  description?: string;
  /** The ID of the status. */
  id?: string;
  /** The name of the status. */
  name?: string;
  scope?: StatusScope;
  /** The category of the status. */
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE' | string;
  /**
   * @deprecated See the [deprecation
   *   notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
   *
   *   Projects and issue types where the status is used. Only available if the `usages` expand is requested.
   */
  usages?: ProjectIssueTypes[];
}
