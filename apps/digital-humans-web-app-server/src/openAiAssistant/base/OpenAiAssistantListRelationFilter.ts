/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpenAiAssistantWhereInput } from "./OpenAiAssistantWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OpenAiAssistantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OpenAiAssistantWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenAiAssistantWhereInput)
  @IsOptional()
  @Field(() => OpenAiAssistantWhereInput, {
    nullable: true,
  })
  every?: OpenAiAssistantWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpenAiAssistantWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenAiAssistantWhereInput)
  @IsOptional()
  @Field(() => OpenAiAssistantWhereInput, {
    nullable: true,
  })
  some?: OpenAiAssistantWhereInput;

  @ApiProperty({
    required: false,
    type: () => OpenAiAssistantWhereInput,
  })
  @ValidateNested()
  @Type(() => OpenAiAssistantWhereInput)
  @IsOptional()
  @Field(() => OpenAiAssistantWhereInput, {
    nullable: true,
  })
  none?: OpenAiAssistantWhereInput;
}
export { OpenAiAssistantListRelationFilter as OpenAiAssistantListRelationFilter };
