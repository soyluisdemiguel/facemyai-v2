import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessionsServiceBase } from "./base/sessions.service.base";

@Injectable()
export class SessionsService extends SessionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
