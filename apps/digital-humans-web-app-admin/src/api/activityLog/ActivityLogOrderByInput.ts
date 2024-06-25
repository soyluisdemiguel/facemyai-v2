import { SortOrder } from "../../util/SortOrder";

export type ActivityLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
