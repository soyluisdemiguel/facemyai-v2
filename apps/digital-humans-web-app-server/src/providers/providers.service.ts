import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProvidersServiceBase } from "./base/providers.service.base";

@Injectable()
export class ProvidersService extends ProvidersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
