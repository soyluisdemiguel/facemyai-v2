import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationsModuleBase } from "./base/conversations.module.base";
import { ConversationsService } from "./conversations.service";
import { ConversationsController } from "./conversations.controller";
import { ConversationsResolver } from "./conversations.resolver";

@Module({
  imports: [ConversationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationsController],
  providers: [ConversationsService, ConversationsResolver],
  exports: [ConversationsService],
})
export class ConversationsModule {}
