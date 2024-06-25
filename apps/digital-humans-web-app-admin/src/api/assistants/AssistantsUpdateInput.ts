import { AssistantSettingsUpdateManyWithoutAssistantsItemsInput } from "./AssistantSettingsUpdateManyWithoutAssistantsItemsInput";

export type AssistantsUpdateInput = {
  assistantSettingsItems?: AssistantSettingsUpdateManyWithoutAssistantsItemsInput;
  description?: string | null;
  name?: string | null;
  openAiAssistantId?: string | null;
  typeId?: string | null;
};
