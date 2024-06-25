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
import { UserTypesWhereInput } from "./UserTypesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserTypesOrderByInput } from "./UserTypesOrderByInput";

@ArgsType()
class UserTypesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserTypesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserTypesWhereInput, { nullable: true })
  @Type(() => UserTypesWhereInput)
  where?: UserTypesWhereInput;

  @ApiProperty({
    required: false,
    type: [UserTypesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserTypesOrderByInput], { nullable: true })
  @Type(() => UserTypesOrderByInput)
  orderBy?: Array<UserTypesOrderByInput>;

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

export { UserTypesFindManyArgs as UserTypesFindManyArgs };
