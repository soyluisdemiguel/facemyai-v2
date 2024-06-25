import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccessLogsResolverBase } from "./base/accessLogs.resolver.base";
import { AccessLogs } from "./base/AccessLogs";
import { AccessLogsService } from "./accessLogs.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccessLogs)
export class AccessLogsResolver extends AccessLogsResolverBase {
  constructor(
    protected readonly service: AccessLogsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
