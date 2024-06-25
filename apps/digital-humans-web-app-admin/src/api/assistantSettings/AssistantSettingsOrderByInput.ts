import { SortOrder } from "../../util/SortOrder";

export type AssistantSettingsOrderByInput = {
  assistantId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  settingName?: SortOrder;
  settingValue?: SortOrder;
  updatedAt?: SortOrder;
};
