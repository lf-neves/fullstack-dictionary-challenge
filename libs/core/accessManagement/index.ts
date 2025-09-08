type ActionTypes = "create" | "read" | "update" | "delete";

export interface CanUserPerformActionInput {
  action: ActionTypes;
  resourceId: string;
  userId: string;
}
