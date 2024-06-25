import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SessionsModuleBase } from "./base/sessions.module.base";
import { SessionsService } from "./sessions.service";
import { SessionsController } from "./sessions.controller";
import { SessionsResolver } from "./sessions.resolver";

@Module({
  imports: [SessionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SessionsController],
  providers: [SessionsService, SessionsResolver],
  exports: [SessionsService],
})
export class SessionsModule {}
