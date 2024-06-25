import { AssistantSettingsListRelationFilter } from "../assistantSettings/AssistantSettingsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssistantsWhereInput = {
  assistantSettingsItems?: AssistantSettingsListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  openAiAssistantId?: StringNullableFilter;
  typeId?: StringNullableFilter;
};
