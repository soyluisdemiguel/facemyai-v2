import { MessageTypesWhereInput } from "./MessageTypesWhereInput";
import { MessageTypesOrderByInput } from "./MessageTypesOrderByInput";

export type MessageTypesFindManyArgs = {
  where?: MessageTypesWhereInput;
  orderBy?: Array<MessageTypesOrderByInput>;
  skip?: number;
  take?: number;
};
