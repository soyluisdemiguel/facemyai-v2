import { Conversations as TConversations } from "../api/conversations/Conversations";

export const CONVERSATIONS_TITLE_FIELD = "id";

export const ConversationsTitle = (record: TConversations): string => {
  return record.id?.toString() || String(record.id);
};
