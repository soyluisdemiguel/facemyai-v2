import { AccessLogsListRelationFilter } from "../accessLogs/AccessLogsListRelationFilter";
import { ActivityLogListRelationFilter } from "../activityLog/ActivityLogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  accessLogsItems?: AccessLogsListRelationFilter;
  activityLogs?: ActivityLogListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
