import { AssistantSettingsWhereInput } from "./AssistantSettingsWhereInput";
import { AssistantSettingsOrderByInput } from "./AssistantSettingsOrderByInput";

export type AssistantSettingsFindManyArgs = {
  where?: AssistantSettingsWhereInput;
  orderBy?: Array<AssistantSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
