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
import { MessagesWhereInput } from "./MessagesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MessagesOrderByInput } from "./MessagesOrderByInput";

@ArgsType()
class MessagesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MessagesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MessagesWhereInput, { nullable: true })
  @Type(() => MessagesWhereInput)
  where?: MessagesWhereInput;

  @ApiProperty({
    required: false,
    type: [MessagesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MessagesOrderByInput], { nullable: true })
  @Type(() => MessagesOrderByInput)
  orderBy?: Array<MessagesOrderByInput>;

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

export { MessagesFindManyArgs as MessagesFindManyArgs };
