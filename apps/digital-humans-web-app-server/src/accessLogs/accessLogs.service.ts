import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessLogsServiceBase } from "./base/accessLogs.service.base";

@Injectable()
export class AccessLogsService extends AccessLogsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
