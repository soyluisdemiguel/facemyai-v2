import { MessageTypes as TMessageTypes } from "../api/messageTypes/MessageTypes";

export const MESSAGETYPES_TITLE_FIELD = "id";

export const MessageTypesTitle = (record: TMessageTypes): string => {
  return record.id?.toString() || String(record.id);
};
