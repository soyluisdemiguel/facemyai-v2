import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssistantTypesService } from "./assistantTypes.service";
import { AssistantTypesControllerBase } from "./base/assistantTypes.controller.base";

@swagger.ApiTags("assistantTypes")
@common.Controller("assistantTypes")
export class AssistantTypesController extends AssistantTypesControllerBase {
  constructor(
    protected readonly service: AssistantTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
