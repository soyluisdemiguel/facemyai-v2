import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessLogsCreateInput = {
  dateTime?: Date | null;
  device?: string | null;
  ip?: string | null;
  user?: UserWhereUniqueInput | null;
};
