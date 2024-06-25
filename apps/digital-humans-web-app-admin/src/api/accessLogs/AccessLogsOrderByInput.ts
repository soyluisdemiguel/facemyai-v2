import { SortOrder } from "../../util/SortOrder";

export type AccessLogsOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  device?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
