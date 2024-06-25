import { SortOrder } from "../../util/SortOrder";

export type MessagesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
