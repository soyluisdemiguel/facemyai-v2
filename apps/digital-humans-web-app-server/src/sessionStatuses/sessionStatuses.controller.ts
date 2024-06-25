import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SessionStatusesService } from "./sessionStatuses.service";
import { SessionStatusesControllerBase } from "./base/sessionStatuses.controller.base";

@swagger.ApiTags("sessionStatuses")
@common.Controller("sessionStatuses")
export class SessionStatusesController extends SessionStatusesControllerBase {
  constructor(
    protected readonly service: SessionStatusesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
