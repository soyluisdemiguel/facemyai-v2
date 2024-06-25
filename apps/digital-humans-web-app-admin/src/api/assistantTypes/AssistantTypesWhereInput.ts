import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssistantTypesWhereInput = {
  id?: StringFilter;
  typeName?: StringNullableFilter;
};
