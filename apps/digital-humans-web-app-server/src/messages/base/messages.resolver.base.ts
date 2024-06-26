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
import { Messages } from "./Messages";
import { MessagesCountArgs } from "./MessagesCountArgs";
import { MessagesFindManyArgs } from "./MessagesFindManyArgs";
import { MessagesFindUniqueArgs } from "./MessagesFindUniqueArgs";
import { DeleteMessagesArgs } from "./DeleteMessagesArgs";
import { MessagesService } from "../messages.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Messages)
export class MessagesResolverBase {
  constructor(
    protected readonly service: MessagesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "read",
    possession: "any",
  })
  async _messagesItemsMeta(
    @graphql.Args() args: MessagesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Messages])
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "read",
    possession: "any",
  })
  async messagesItems(
    @graphql.Args() args: MessagesFindManyArgs
  ): Promise<Messages[]> {
    return this.service.messagesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Messages, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "read",
    possession: "own",
  })
  async messages(
    @graphql.Args() args: MessagesFindUniqueArgs
  ): Promise<Messages | null> {
    const result = await this.service.messages(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Messages)
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "delete",
    possession: "any",
  })
  async deleteMessages(
    @graphql.Args() args: DeleteMessagesArgs
  ): Promise<Messages | null> {
    try {
      return await this.service.deleteMessages(args);
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
