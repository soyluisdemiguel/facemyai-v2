import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssistantSettingsModuleBase } from "./base/assistantSettings.module.base";
import { AssistantSettingsService } from "./assistantSettings.service";
import { AssistantSettingsController } from "./assistantSettings.controller";
import { AssistantSettingsResolver } from "./assistantSettings.resolver";

@Module({
  imports: [AssistantSettingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssistantSettingsController],
  providers: [AssistantSettingsService, AssistantSettingsResolver],
  exports: [AssistantSettingsService],
})
export class AssistantSettingsModule {}
