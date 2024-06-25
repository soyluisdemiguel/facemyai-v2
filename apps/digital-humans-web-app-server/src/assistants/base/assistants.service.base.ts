/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Assistants as PrismaAssistants,
  AssistantSettings as PrismaAssistantSettings,
} from "@prisma/client";

export class AssistantsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssistantsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assistants.count(args);
  }

  async assistantsItems(
    args: Prisma.AssistantsFindManyArgs
  ): Promise<PrismaAssistants[]> {
    return this.prisma.assistants.findMany(args);
  }
  async assistants(
    args: Prisma.AssistantsFindUniqueArgs
  ): Promise<PrismaAssistants | null> {
    return this.prisma.assistants.findUnique(args);
  }
  async createAssistants(
    args: Prisma.AssistantsCreateArgs
  ): Promise<PrismaAssistants> {
    return this.prisma.assistants.create(args);
  }
  async updateAssistants(
    args: Prisma.AssistantsUpdateArgs
  ): Promise<PrismaAssistants> {
    return this.prisma.assistants.update(args);
  }
  async deleteAssistants(
    args: Prisma.AssistantsDeleteArgs
  ): Promise<PrismaAssistants> {
    return this.prisma.assistants.delete(args);
  }

  async findAssistantSettingsItems(
    parentId: string,
    args: Prisma.AssistantSettingsFindManyArgs
  ): Promise<PrismaAssistantSettings[]> {
    return this.prisma.assistants
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .assistantSettingsItems(args);
  }
}