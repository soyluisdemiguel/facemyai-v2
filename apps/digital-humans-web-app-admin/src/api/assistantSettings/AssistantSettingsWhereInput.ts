import { AssistantsWhereUniqueInput } from "../assistants/AssistantsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssistantSettingsWhereInput = {
  assistant?: AssistantsWhereUniqueInput;
  id?: StringFilter;
  settingName?: StringNullableFilter;
  settingValue?: StringNullableFilter;
};
