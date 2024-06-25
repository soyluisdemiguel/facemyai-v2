/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Industries } from "./Industries";
import { IndustriesCountArgs } from "./IndustriesCountArgs";
import { IndustriesFindManyArgs } from "./IndustriesFindManyArgs";
import { IndustriesFindUniqueArgs } from "./IndustriesFindUniqueArgs";
import { DeleteIndustriesArgs } from "./DeleteIndustriesArgs";
import { IndustriesService } from "../industries.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Industries)
export class IndustriesResolverBase {
  constructor(
    protected readonly service: IndustriesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Industries",
    action: "read",
    possession: "any",
  })
  async _industriesItemsMeta(
    @graphql.Args() args: IndustriesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Industries])
  @nestAccessControl.UseRoles({
    resource: "Industries",
    action: "read",
    possession: "any",
  })
  async industriesItems(
    @graphql.Args() args: IndustriesFindManyArgs
  ): Promise<Industries[]> {
    return this.service.industriesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Industries, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Industries",
    action: "read",
    possession: "own",
  })
  async industries(
    @graphql.Args() args: IndustriesFindUniqueArgs
  ): Promise<Industries | null> {
    const result = await this.service.industries(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Industries)
  @nestAccessControl.UseRoles({
    resource: "Industries",
    action: "delete",
    possession: "any",
  })
  async deleteIndustries(
    @graphql.Args() args: DeleteIndustriesArgs
  ): Promise<Industries | null> {
    try {
      return await this.service.deleteIndustries(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
