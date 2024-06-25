import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssistantTypesResolverBase } from "./base/assistantTypes.resolver.base";
import { AssistantTypes } from "./base/AssistantTypes";
import { AssistantTypesService } from "./assistantTypes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssistantTypes)
export class AssistantTypesResolver extends AssistantTypesResolverBase {
  constructor(
    protected readonly service: AssistantTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
