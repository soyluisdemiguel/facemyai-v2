import { OpenAiAssistant as TOpenAiAssistant } from "../api/openAiAssistant/OpenAiAssistant";

export const OPENAIASSISTANT_TITLE_FIELD = "id";

export const OpenAiAssistantTitle = (record: TOpenAiAssistant): string => {
  return record.id?.toString() || String(record.id);
};
