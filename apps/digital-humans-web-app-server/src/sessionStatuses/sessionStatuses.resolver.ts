import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SessionStatusesResolverBase } from "./base/sessionStatuses.resolver.base";
import { SessionStatuses } from "./base/SessionStatuses";
import { SessionStatusesService } from "./sessionStatuses.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SessionStatuses)
export class SessionStatusesResolver extends SessionStatusesResolverBase {
  constructor(
    protected readonly service: SessionStatusesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
