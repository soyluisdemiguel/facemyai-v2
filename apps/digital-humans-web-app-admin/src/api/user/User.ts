import { AccessLogs } from "../accessLogs/AccessLogs";
import { ActivityLog } from "../activityLog/ActivityLog";
import { JsonValue } from "type-fest";

export type User = {
  accessLogsItems?: Array<AccessLogs>;
  activityLogs?: Array<ActivityLog>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
