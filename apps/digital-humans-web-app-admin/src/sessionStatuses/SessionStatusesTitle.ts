import { SessionStatuses as TSessionStatuses } from "../api/sessionStatuses/SessionStatuses";

export const SESSIONSTATUSES_TITLE_FIELD = "id";

export const SessionStatusesTitle = (record: TSessionStatuses): string => {
  return record.id?.toString() || String(record.id);
};
