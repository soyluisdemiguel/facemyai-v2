import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessLogsService } from "./accessLogs.service";
import { AccessLogsControllerBase } from "./base/accessLogs.controller.base";

@swagger.ApiTags("accessLogs")
@common.Controller("accessLogs")
export class AccessLogsController extends AccessLogsControllerBase {
  constructor(
    protected readonly service: AccessLogsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
