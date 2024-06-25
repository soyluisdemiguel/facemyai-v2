import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SessionStatusesModuleBase } from "./base/sessionStatuses.module.base";
import { SessionStatusesService } from "./sessionStatuses.service";
import { SessionStatusesController } from "./sessionStatuses.controller";
import { SessionStatusesResolver } from "./sessionStatuses.resolver";

@Module({
  imports: [SessionStatusesModuleBase, forwardRef(() => AuthModule)],
  controllers: [SessionStatusesController],
  providers: [SessionStatusesService, SessionStatusesResolver],
  exports: [SessionStatusesService],
})
export class SessionStatusesModule {}
