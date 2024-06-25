import { AccessLogsCreateNestedManyWithoutUsersInput } from "./AccessLogsCreateNestedManyWithoutUsersInput";
import { ActivityLogCreateNestedManyWithoutUsersInput } from "./ActivityLogCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accessLogsItems?: AccessLogsCreateNestedManyWithoutUsersInput;
  activityLogs?: ActivityLogCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
