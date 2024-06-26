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
import { MessagesWhereInput } from "./MessagesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MessagesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MessagesWhereInput,
  })
  @ValidateNested()
  @Type(() => MessagesWhereInput)
  @IsOptional()
  @Field(() => MessagesWhereInput, {
    nullable: true,
  })
  every?: MessagesWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessagesWhereInput,
  })
  @ValidateNested()
  @Type(() => MessagesWhereInput)
  @IsOptional()
  @Field(() => MessagesWhereInput, {
    nullable: true,
  })
  some?: MessagesWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessagesWhereInput,
  })
  @ValidateNested()
  @Type(() => MessagesWhereInput)
  @IsOptional()
  @Field(() => MessagesWhereInput, {
    nullable: true,
  })
  none?: MessagesWhereInput;
}
export { MessagesListRelationFilter as MessagesListRelationFilter };
