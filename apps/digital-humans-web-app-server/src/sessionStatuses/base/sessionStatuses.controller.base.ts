/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SessionStatusesService } from "../sessionStatuses.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SessionStatusesCreateInput } from "./SessionStatusesCreateInput";
import { SessionStatuses } from "./SessionStatuses";
import { SessionStatusesFindManyArgs } from "./SessionStatusesFindManyArgs";
import { SessionStatusesWhereUniqueInput } from "./SessionStatusesWhereUniqueInput";
import { SessionStatusesUpdateInput } from "./SessionStatusesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SessionStatusesControllerBase {
  constructor(
    protected readonly service: SessionStatusesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SessionStatuses })
  @nestAccessControl.UseRoles({
    resource: "SessionStatuses",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSessionStatuses(
    @common.Body() data: SessionStatusesCreateInput
  ): Promise<SessionStatuses> {
    return await this.service.createSessionStatuses({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SessionStatuses] })
  @ApiNestedQuery(SessionStatusesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SessionStatuses",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sessionStatusesItems(
    @common.Req() request: Request
  ): Promise<SessionStatuses[]> {
    const args = plainToClass(SessionStatusesFindManyArgs, request.query);
    return this.service.sessionStatusesItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SessionStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SessionStatuses",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sessionStatuses(
    @common.Param() params: SessionStatusesWhereUniqueInput
  ): Promise<SessionStatuses | null> {
    const result = await this.service.sessionStatuses({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SessionStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SessionStatuses",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSessionStatuses(
    @common.Param() params: SessionStatusesWhereUniqueInput,
    @common.Body() data: SessionStatusesUpdateInput
  ): Promise<SessionStatuses | null> {
    try {
      return await this.service.updateSessionStatuses({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SessionStatuses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SessionStatuses",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSessionStatuses(
    @common.Param() params: SessionStatusesWhereUniqueInput
  ): Promise<SessionStatuses | null> {
    try {
      return await this.service.deleteSessionStatuses({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}