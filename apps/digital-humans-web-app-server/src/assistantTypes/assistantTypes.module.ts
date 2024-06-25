import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssistantTypesModuleBase } from "./base/assistantTypes.module.base";
import { AssistantTypesService } from "./assistantTypes.service";
import { AssistantTypesController } from "./assistantTypes.controller";
import { AssistantTypesResolver } from "./assistantTypes.resolver";

@Module({
  imports: [AssistantTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssistantTypesController],
  providers: [AssistantTypesService, AssistantTypesResolver],
  exports: [AssistantTypesService],
})
export class AssistantTypesModule {}
