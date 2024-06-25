import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IndustriesService } from "./industries.service";
import { IndustriesControllerBase } from "./base/industries.controller.base";

@swagger.ApiTags("industries")
@common.Controller("industries")
export class IndustriesController extends IndustriesControllerBase {
  constructor(
    protected readonly service: IndustriesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
