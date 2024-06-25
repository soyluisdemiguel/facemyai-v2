import { AssistantSettings } from "../assistantSettings/AssistantSettings";

export type Assistants = {
  assistantSettingsItems?: Array<AssistantSettings>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  openAiAssistantId: string | null;
  typeId: string | null;
  updatedAt: Date;
};
