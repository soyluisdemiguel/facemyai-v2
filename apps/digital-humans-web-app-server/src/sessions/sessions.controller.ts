import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SessionsService } from "./sessions.service";
import { SessionsControllerBase } from "./base/sessions.controller.base";

@swagger.ApiTags("sessions")
@common.Controller("sessions")
export class SessionsController extends SessionsControllerBase {
  constructor(
    protected readonly service: SessionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
