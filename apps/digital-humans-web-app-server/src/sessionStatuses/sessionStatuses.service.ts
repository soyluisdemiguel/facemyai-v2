import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessionStatusesServiceBase } from "./base/sessionStatuses.service.base";

@Injectable()
export class SessionStatusesService extends SessionStatusesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
