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
import { SessionStatusesWhereInput } from "./SessionStatusesWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SessionStatusesCountArgs {
  @ApiProperty({
    required: false,
    type: () => SessionStatusesWhereInput,
  })
  @Field(() => SessionStatusesWhereInput, { nullable: true })
  @Type(() => SessionStatusesWhereInput)
  where?: SessionStatusesWhereInput;
}

export { SessionStatusesCountArgs as SessionStatusesCountArgs };
