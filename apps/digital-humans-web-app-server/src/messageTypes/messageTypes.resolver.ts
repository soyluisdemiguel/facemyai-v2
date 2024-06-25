import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MessageTypesResolverBase } from "./base/messageTypes.resolver.base";
import { MessageTypes } from "./base/MessageTypes";
import { MessageTypesService } from "./messageTypes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MessageTypes)
export class MessageTypesResolver extends MessageTypesResolverBase {
  constructor(
    protected readonly service: MessageTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
