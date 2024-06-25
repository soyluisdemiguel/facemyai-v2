import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssistantsServiceBase } from "./base/assistants.service.base";

@Injectable()
export class AssistantsService extends AssistantsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
