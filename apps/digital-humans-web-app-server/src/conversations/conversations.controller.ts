import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationsService } from "./conversations.service";
import { ConversationsControllerBase } from "./base/conversations.controller.base";

@swagger.ApiTags("conversations")
@common.Controller("conversations")
export class ConversationsController extends ConversationsControllerBase {
  constructor(
    protected readonly service: ConversationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
