import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityLogUpdateInput = {
  action?: string | null;
  dateTime?: Date | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
