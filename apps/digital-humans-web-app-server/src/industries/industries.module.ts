import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IndustriesModuleBase } from "./base/industries.module.base";
import { IndustriesService } from "./industries.service";
import { IndustriesController } from "./industries.controller";
import { IndustriesResolver } from "./industries.resolver";

@Module({
  imports: [IndustriesModuleBase, forwardRef(() => AuthModule)],
  controllers: [IndustriesController],
  providers: [IndustriesService, IndustriesResolver],
  exports: [IndustriesService],
})
export class IndustriesModule {}
