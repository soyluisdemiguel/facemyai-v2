import { Messages as TMessages } from "../api/messages/Messages";

export const MESSAGES_TITLE_FIELD = "id";

export const MessagesTitle = (record: TMessages): string => {
  return record.id?.toString() || String(record.id);
};
