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
import { MessageTypesWhereInput } from "./MessageTypesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MessageTypesOrderByInput } from "./MessageTypesOrderByInput";

@ArgsType()
class MessageTypesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MessageTypesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MessageTypesWhereInput, { nullable: true })
  @Type(() => MessageTypesWhereInput)
  where?: MessageTypesWhereInput;

  @ApiProperty({
    required: false,
    type: [MessageTypesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MessageTypesOrderByInput], { nullable: true })
  @Type(() => MessageTypesOrderByInput)
  orderBy?: Array<MessageTypesOrderByInput>;

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

export { MessageTypesFindManyArgs as MessageTypesFindManyArgs };
