import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OpenAiAssistantResolverBase } from "./base/openAiAssistant.resolver.base";
import { OpenAiAssistant } from "./base/OpenAiAssistant";
import { OpenAiAssistantService } from "./openAiAssistant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OpenAiAssistant)
export class OpenAiAssistantResolver extends OpenAiAssistantResolverBase {
  constructor(
    protected readonly service: OpenAiAssistantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
