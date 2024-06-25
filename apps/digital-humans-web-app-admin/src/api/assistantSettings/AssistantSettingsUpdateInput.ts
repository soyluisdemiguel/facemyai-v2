import { AssistantsWhereUniqueInput } from "../assistants/AssistantsWhereUniqueInput";

export type AssistantSettingsUpdateInput = {
  assistant?: AssistantsWhereUniqueInput | null;
  settingName?: string | null;
  settingValue?: string | null;
};
