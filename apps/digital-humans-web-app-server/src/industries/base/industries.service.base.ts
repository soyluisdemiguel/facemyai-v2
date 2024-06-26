/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Industries as PrismaIndustries } from "@prisma/client";

export class IndustriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IndustriesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.industries.count(args);
  }

  async industriesItems(
    args: Prisma.IndustriesFindManyArgs
  ): Promise<PrismaIndustries[]> {
    return this.prisma.industries.findMany(args);
  }
  async industries(
    args: Prisma.IndustriesFindUniqueArgs
  ): Promise<PrismaIndustries | null> {
    return this.prisma.industries.findUnique(args);
  }
  async createIndustries(
    args: Prisma.IndustriesCreateArgs
  ): Promise<PrismaIndustries> {
    return this.prisma.industries.create(args);
  }
  async updateIndustries(
    args: Prisma.IndustriesUpdateArgs
  ): Promise<PrismaIndustries> {
    return this.prisma.industries.update(args);
  }
  async deleteIndustries(
    args: Prisma.IndustriesDeleteArgs
  ): Promise<PrismaIndustries> {
    return this.prisma.industries.delete(args);
  }
}
