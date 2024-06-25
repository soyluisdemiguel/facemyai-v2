import { Assistants } from "../assistants/Assistants";

export type AssistantSettings = {
  assistant?: Assistants | null;
  createdAt: Date;
  id: string;
  settingName: string | null;
  settingValue: string | null;
  updatedAt: Date;
};
