import { OpenAiAssistantWhereInput } from "./OpenAiAssistantWhereInput";
import { OpenAiAssistantOrderByInput } from "./OpenAiAssistantOrderByInput";

export type OpenAiAssistantFindManyArgs = {
  where?: OpenAiAssistantWhereInput;
  orderBy?: Array<OpenAiAssistantOrderByInput>;
  skip?: number;
  take?: number;
};
