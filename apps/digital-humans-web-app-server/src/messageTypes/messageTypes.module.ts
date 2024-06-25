import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessageTypesModuleBase } from "./base/messageTypes.module.base";
import { MessageTypesService } from "./messageTypes.service";
import { MessageTypesController } from "./messageTypes.controller";
import { MessageTypesResolver } from "./messageTypes.resolver";

@Module({
  imports: [MessageTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessageTypesController],
  providers: [MessageTypesService, MessageTypesResolver],
  exports: [MessageTypesService],
})
export class MessageTypesModule {}
