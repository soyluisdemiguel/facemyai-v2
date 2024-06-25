import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssistantTypesServiceBase } from "./base/assistantTypes.service.base";

@Injectable()
export class AssistantTypesService extends AssistantTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
