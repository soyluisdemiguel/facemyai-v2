import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserTypesService } from "./userTypes.service";
import { UserTypesControllerBase } from "./base/userTypes.controller.base";

@swagger.ApiTags("userTypes")
@common.Controller("userTypes")
export class UserTypesController extends UserTypesControllerBase {
  constructor(
    protected readonly service: UserTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
