import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssistantsModuleBase } from "./base/assistants.module.base";
import { AssistantsService } from "./assistants.service";
import { AssistantsController } from "./assistants.controller";
import { AssistantsResolver } from "./assistants.resolver";

@Module({
  imports: [AssistantsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssistantsController],
  providers: [AssistantsService, AssistantsResolver],
  exports: [AssistantsService],
})
export class AssistantsModule {}
