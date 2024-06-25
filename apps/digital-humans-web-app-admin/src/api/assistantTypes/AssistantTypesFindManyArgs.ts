import { AssistantTypesWhereInput } from "./AssistantTypesWhereInput";
import { AssistantTypesOrderByInput } from "./AssistantTypesOrderByInput";

export type AssistantTypesFindManyArgs = {
  where?: AssistantTypesWhereInput;
  orderBy?: Array<AssistantTypesOrderByInput>;
  skip?: number;
  take?: number;
};
