type MutationResponseBase = {
  message: string;
  code: string;
  success: boolean;
};

export function createMutationResponse<T extends Record<string, unknown>>(
  fields?: T
): MutationResponseBase & T {
  return { message: "success", code: "200", success: true, ...(fields as T) };
}
