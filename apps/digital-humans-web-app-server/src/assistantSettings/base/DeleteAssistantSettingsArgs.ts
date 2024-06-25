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
import { AssistantSettingsWhereUniqueInput } from "./AssistantSettingsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAssistantSettingsArgs {
  @ApiProperty({
    required: true,
    type: () => AssistantSettingsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssistantSettingsWhereUniqueInput)
  @Field(() => AssistantSettingsWhereUniqueInput, { nullable: false })
  where!: AssistantSettingsWhereUniqueInput;
}

export { DeleteAssistantSettingsArgs as DeleteAssistantSettingsArgs };
