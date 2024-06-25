import { AssistantSettingsCreateNestedManyWithoutAssistantsItemsInput } from "./AssistantSettingsCreateNestedManyWithoutAssistantsItemsInput";

export type AssistantsCreateInput = {
  assistantSettingsItems?: AssistantSettingsCreateNestedManyWithoutAssistantsItemsInput;
  description?: string | null;
  name?: string | null;
  openAiAssistantId?: string | null;
  typeId?: string | null;
};
