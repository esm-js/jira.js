/** Jql function precomputation. */
export interface JqlFunctionPrecomputation {
  /** The list of arguments function was invoked with. */
  arguments?: string[];
  /** The timestamp of the precomputation creation. */
  created?: string;
  /** The error message to be displayed to the user. */
  error?: string;
  /** The field the function was executed against. */
  field?: string;
  /** The function key. */
  functionKey?: string;
  /** The name of the function. */
  functionName?: string;
  /** The id of the precomputation. */
  id?: string;
  /** The operator in context of which function was executed. */
  operator?: string;
  /** The timestamp of the precomputation last update. */
  updated?: string;
  /** The timestamp of the precomputation last usage. */
  used?: string;
  /** The JQL fragment stored as the precomputation. */
  value?: string;
}
