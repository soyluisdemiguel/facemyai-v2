import { ConversationsWhereInput } from "./ConversationsWhereInput";
import { ConversationsOrderByInput } from "./ConversationsOrderByInput";

export type ConversationsFindManyArgs = {
  where?: ConversationsWhereInput;
  orderBy?: Array<ConversationsOrderByInput>;
  skip?: number;
  take?: number;
};
