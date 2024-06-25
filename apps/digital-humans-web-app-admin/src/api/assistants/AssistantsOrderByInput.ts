import { SortOrder } from "../../util/SortOrder";

export type AssistantsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  openAiAssistantId?: SortOrder;
  typeId?: SortOrder;
  updatedAt?: SortOrder;
};
