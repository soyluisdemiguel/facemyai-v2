import { AssistantsWhereInput } from "./AssistantsWhereInput";
import { AssistantsOrderByInput } from "./AssistantsOrderByInput";

export type AssistantsFindManyArgs = {
  where?: AssistantsWhereInput;
  orderBy?: Array<AssistantsOrderByInput>;
  skip?: number;
  take?: number;
};
