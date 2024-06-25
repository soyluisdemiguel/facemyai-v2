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
import { AssistantsWhereInput } from "./AssistantsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssistantsOrderByInput } from "./AssistantsOrderByInput";

@ArgsType()
class AssistantsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssistantsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssistantsWhereInput, { nullable: true })
  @Type(() => AssistantsWhereInput)
  where?: AssistantsWhereInput;

  @ApiProperty({
    required: false,
    type: [AssistantsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssistantsOrderByInput], { nullable: true })
  @Type(() => AssistantsOrderByInput)
  orderBy?: Array<AssistantsOrderByInput>;

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

export { AssistantsFindManyArgs as AssistantsFindManyArgs };