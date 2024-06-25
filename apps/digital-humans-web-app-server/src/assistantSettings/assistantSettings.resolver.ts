import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssistantSettingsResolverBase } from "./base/assistantSettings.resolver.base";
import { AssistantSettings } from "./base/AssistantSettings";
import { AssistantSettingsService } from "./assistantSettings.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssistantSettings)
export class AssistantSettingsResolver extends AssistantSettingsResolverBase {
  constructor(
    protected readonly service: AssistantSettingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
