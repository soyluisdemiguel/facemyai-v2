import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessLogsUpdateInput = {
  dateTime?: Date | null;
  device?: string | null;
  ip?: string | null;
  user?: UserWhereUniqueInput | null;
};
