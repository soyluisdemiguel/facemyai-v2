import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProvidersService } from "./providers.service";
import { ProvidersControllerBase } from "./base/providers.controller.base";

@swagger.ApiTags("providers")
@common.Controller("providers")
export class ProvidersController extends ProvidersControllerBase {
  constructor(
    protected readonly service: ProvidersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
