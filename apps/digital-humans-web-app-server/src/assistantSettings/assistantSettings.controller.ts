import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssistantSettingsService } from "./assistantSettings.service";
import { AssistantSettingsControllerBase } from "./base/assistantSettings.controller.base";

@swagger.ApiTags("assistantSettings")
@common.Controller("assistantSettings")
export class AssistantSettingsController extends AssistantSettingsControllerBase {
  constructor(
    protected readonly service: AssistantSettingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
