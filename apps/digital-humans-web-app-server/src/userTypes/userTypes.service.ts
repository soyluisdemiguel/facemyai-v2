import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTypesServiceBase } from "./base/userTypes.service.base";

@Injectable()
export class UserTypesService extends UserTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
