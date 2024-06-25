import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpenAiAssistantServiceBase } from "./base/openAiAssistant.service.base";

@Injectable()
export class OpenAiAssistantService extends OpenAiAssistantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
