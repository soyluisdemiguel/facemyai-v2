import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndustriesServiceBase } from "./base/industries.service.base";

@Injectable()
export class IndustriesService extends IndustriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
