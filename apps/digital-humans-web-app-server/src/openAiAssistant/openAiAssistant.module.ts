import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OpenAiAssistantModuleBase } from "./base/openAiAssistant.module.base";
import { OpenAiAssistantService } from "./openAiAssistant.service";
import { OpenAiAssistantController } from "./openAiAssistant.controller";
import { OpenAiAssistantResolver } from "./openAiAssistant.resolver";

@Module({
  imports: [OpenAiAssistantModuleBase, forwardRef(() => AuthModule)],
  controllers: [OpenAiAssistantController],
  providers: [OpenAiAssistantService, OpenAiAssistantResolver],
  exports: [OpenAiAssistantService],
})
export class OpenAiAssistantModule {}
