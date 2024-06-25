import { User } from "../user/User";

export type ActivityLog = {
  action: string | null;
  createdAt: Date;
  dateTime: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
