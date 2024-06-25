import { Sessions as TSessions } from "../api/sessions/Sessions";

export const SESSIONS_TITLE_FIELD = "id";

export const SessionsTitle = (record: TSessions): string => {
  return record.id?.toString() || String(record.id);
};
