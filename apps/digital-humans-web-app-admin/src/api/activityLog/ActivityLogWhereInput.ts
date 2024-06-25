import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityLogWhereInput = {
  action?: StringNullableFilter;
  dateTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
