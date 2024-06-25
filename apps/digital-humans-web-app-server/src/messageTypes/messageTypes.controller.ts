import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MessageTypesService } from "./messageTypes.service";
import { MessageTypesControllerBase } from "./base/messageTypes.controller.base";

@swagger.ApiTags("messageTypes")
@common.Controller("messageTypes")
export class MessageTypesController extends MessageTypesControllerBase {
  constructor(
    protected readonly service: MessageTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
