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
import { AssistantTypesWhereInput } from "./AssistantTypesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssistantTypesOrderByInput } from "./AssistantTypesOrderByInput";

@ArgsType()
class AssistantTypesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssistantTypesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssistantTypesWhereInput, { nullable: true })
  @Type(() => AssistantTypesWhereInput)
  where?: AssistantTypesWhereInput;

  @ApiProperty({
    required: false,
    type: [AssistantTypesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssistantTypesOrderByInput], { nullable: true })
  @Type(() => AssistantTypesOrderByInput)
  orderBy?: Array<AssistantTypesOrderByInput>;

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

export { AssistantTypesFindManyArgs as AssistantTypesFindManyArgs };