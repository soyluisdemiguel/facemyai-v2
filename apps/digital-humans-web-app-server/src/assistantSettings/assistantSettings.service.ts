import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssistantSettingsServiceBase } from "./base/assistantSettings.service.base";

@Injectable()
export class AssistantSettingsService extends AssistantSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
