/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IndustriesWhereInput } from "./IndustriesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IndustriesOrderByInput } from "./IndustriesOrderByInput";

@ArgsType()
class IndustriesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IndustriesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IndustriesWhereInput, { nullable: true })
  @Type(() => IndustriesWhereInput)
  where?: IndustriesWhereInput;

  @ApiProperty({
    required: false,
    type: [IndustriesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IndustriesOrderByInput], { nullable: true })
  @Type(() => IndustriesOrderByInput)
  orderBy?: Array<IndustriesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { IndustriesFindManyArgs as IndustriesFindManyArgs };