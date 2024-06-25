import { User } from "../user/User";

export type AccessLogs = {
  createdAt: Date;
  dateTime: Date | null;
  device: string | null;
  id: string;
  ip: string | null;
  updatedAt: Date;
  user?: User | null;
};
