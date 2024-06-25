import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssistantsService } from "./assistants.service";
import { AssistantsControllerBase } from "./base/assistants.controller.base";

@swagger.ApiTags("assistants")
@common.Controller("assistants")
export class AssistantsController extends AssistantsControllerBase {
  constructor(
    protected readonly service: AssistantsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
