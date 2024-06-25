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
import { AssistantSettingsUpdateManyWithoutAssistantsItemsInput } from "./AssistantSettingsUpdateManyWithoutAssistantsItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssistantsUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AssistantSettingsUpdateManyWithoutAssistantsItemsInput,
  })
  @ValidateNested()
  @Type(() => AssistantSettingsUpdateManyWithoutAssistantsItemsInput)
  @IsOptional()
  @Field(() => AssistantSettingsUpdateManyWithoutAssistantsItemsInput, {
    nullable: true,
  })
  assistantSettingsItems?: AssistantSettingsUpdateManyWithoutAssistantsItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  openAiAssistantId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeId?: string | null;
}

export { AssistantsUpdateInput as AssistantsUpdateInput };
