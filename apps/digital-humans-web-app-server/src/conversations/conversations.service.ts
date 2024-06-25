import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationsServiceBase } from "./base/conversations.service.base";

@Injectable()
export class ConversationsService extends ConversationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
