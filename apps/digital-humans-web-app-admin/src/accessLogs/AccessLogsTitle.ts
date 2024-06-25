import { AccessLogs as TAccessLogs } from "../api/accessLogs/AccessLogs";

export const ACCESSLOGS_TITLE_FIELD = "device";

export const AccessLogsTitle = (record: TAccessLogs): string => {
  return record.device?.toString() || String(record.id);
};
