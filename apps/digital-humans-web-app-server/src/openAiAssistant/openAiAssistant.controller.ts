import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpenAiAssistantService } from "./openAiAssistant.service";
import { OpenAiAssistantControllerBase } from "./base/openAiAssistant.controller.base";

@swagger.ApiTags("openAiAssistants")
@common.Controller("openAiAssistants")
export class OpenAiAssistantController extends OpenAiAssistantControllerBase {
  constructor(
    protected readonly service: OpenAiAssistantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
