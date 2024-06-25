import { AssistantTypes as TAssistantTypes } from "../api/assistantTypes/AssistantTypes";

export const ASSISTANTTYPES_TITLE_FIELD = "typeName";

export const AssistantTypesTitle = (record: TAssistantTypes): string => {
  return record.typeName?.toString() || String(record.id);
};
