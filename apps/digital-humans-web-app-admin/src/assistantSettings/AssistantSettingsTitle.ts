import { AssistantSettings as TAssistantSettings } from "../api/assistantSettings/AssistantSettings";

export const ASSISTANTSETTINGS_TITLE_FIELD = "settingName";

export const AssistantSettingsTitle = (record: TAssistantSettings): string => {
  return record.settingName?.toString() || String(record.id);
};
