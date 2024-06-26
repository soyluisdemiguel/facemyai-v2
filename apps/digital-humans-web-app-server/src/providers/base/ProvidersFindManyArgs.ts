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
import { ProvidersWhereInput } from "./ProvidersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProvidersOrderByInput } from "./ProvidersOrderByInput";

@ArgsType()
class ProvidersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProvidersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProvidersWhereInput, { nullable: true })
  @Type(() => ProvidersWhereInput)
  where?: ProvidersWhereInput;

  @ApiProperty({
    required: false,
    type: [ProvidersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProvidersOrderByInput], { nullable: true })
  @Type(() => ProvidersOrderByInput)
  orderBy?: Array<ProvidersOrderByInput>;

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

export { ProvidersFindManyArgs as ProvidersFindManyArgs };
