import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessLogsModuleBase } from "./base/accessLogs.module.base";
import { AccessLogsService } from "./accessLogs.service";
import { AccessLogsController } from "./accessLogs.controller";
import { AccessLogsResolver } from "./accessLogs.resolver";

@Module({
  imports: [AccessLogsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessLogsController],
  providers: [AccessLogsService, AccessLogsResolver],
  exports: [AccessLogsService],
})
export class AccessLogsModule {}
