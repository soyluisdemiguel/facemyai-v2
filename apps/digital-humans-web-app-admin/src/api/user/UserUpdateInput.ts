import { AccessLogsUpdateManyWithoutUsersInput } from "./AccessLogsUpdateManyWithoutUsersInput";
import { ActivityLogUpdateManyWithoutUsersInput } from "./ActivityLogUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accessLogsItems?: AccessLogsUpdateManyWithoutUsersInput;
  activityLogs?: ActivityLogUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
