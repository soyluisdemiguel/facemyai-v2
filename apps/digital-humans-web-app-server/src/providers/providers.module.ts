import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProvidersModuleBase } from "./base/providers.module.base";
import { ProvidersService } from "./providers.service";
import { ProvidersController } from "./providers.controller";
import { ProvidersResolver } from "./providers.resolver";

@Module({
  imports: [ProvidersModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProvidersController],
  providers: [ProvidersService, ProvidersResolver],
  exports: [ProvidersService],
})
export class ProvidersModule {}
