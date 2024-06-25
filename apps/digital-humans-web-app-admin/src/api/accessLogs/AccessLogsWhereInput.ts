import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessLogsWhereInput = {
  dateTime?: DateTimeNullableFilter;
  device?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
