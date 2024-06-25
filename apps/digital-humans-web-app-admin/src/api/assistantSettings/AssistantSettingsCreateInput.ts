import { AssistantsWhereUniqueInput } from "../assistants/AssistantsWhereUniqueInput";

export type AssistantSettingsCreateInput = {
  assistant?: AssistantsWhereUniqueInput | null;
  settingName?: string | null;
  settingValue?: string | null;
};
