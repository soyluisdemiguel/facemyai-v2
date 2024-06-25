import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserTypesModuleBase } from "./base/userTypes.module.base";
import { UserTypesService } from "./userTypes.service";
import { UserTypesController } from "./userTypes.controller";
import { UserTypesResolver } from "./userTypes.resolver";

@Module({
  imports: [UserTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserTypesController],
  providers: [UserTypesService, UserTypesResolver],
  exports: [UserTypesService],
})
export class UserTypesModule {}
