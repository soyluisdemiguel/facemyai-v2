import { Module } from "@nestjs/common";
import { OpenAiAssistantModule } from "./openAiAssistant/openAiAssistant.module";
import { SessionModule } from "./session/session.module";
import { UserModule } from "./user/user.module";
import { AssistantTypesModule } from "./assistantTypes/assistantTypes.module";
import { AccessLogsModule } from "./accessLogs/accessLogs.module";
import { ActivityLogModule } from "./activityLog/activityLog.module";
import { AssistantSettingsModule } from "./assistantSettings/assistantSettings.module";
import { SessionStatusesModule } from "./sessionStatuses/sessionStatuses.module";
import { MessageTypesModule } from "./messageTypes/messageTypes.module";
import { ClientsModule } from "./clients/clients.module";
import { SessionsModule } from "./sessions/sessions.module";
import { AssistantsModule } from "./assistants/assistants.module";
import { UserTypesModule } from "./userTypes/userTypes.module";
import { ProvidersModule } from "./providers/providers.module";
import { BillingModule } from "./billing/billing.module";
import { MessagesModule } from "./messages/messages.module";
import { IndustriesModule } from "./industries/industries.module";
import { ConversationsModule } from "./conversations/conversations.module";
import { UsersModule } from "./users/users.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    OpenAiAssistantModule,
    SessionModule,
    UserModule,
    AssistantTypesModule,
    AccessLogsModule,
    ActivityLogModule,
    AssistantSettingsModule,
    SessionStatusesModule,
    MessageTypesModule,
    ClientsModule,
    SessionsModule,
    AssistantsModule,
    UserTypesModule,
    ProvidersModule,
    BillingModule,
    MessagesModule,
    IndustriesModule,
    ConversationsModule,
    UsersModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
