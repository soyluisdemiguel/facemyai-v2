import { Assistants as TAssistants } from "../api/assistants/Assistants";

export const ASSISTANTS_TITLE_FIELD = "name";

export const AssistantsTitle = (record: TAssistants): string => {
  return record.name?.toString() || String(record.id);
};
