import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OpenAiAssistantList } from "./openAiAssistant/OpenAiAssistantList";
import { OpenAiAssistantCreate } from "./openAiAssistant/OpenAiAssistantCreate";
import { OpenAiAssistantEdit } from "./openAiAssistant/OpenAiAssistantEdit";
import { OpenAiAssistantShow } from "./openAiAssistant/OpenAiAssistantShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AssistantTypesList } from "./assistantTypes/AssistantTypesList";
import { AssistantTypesCreate } from "./assistantTypes/AssistantTypesCreate";
import { AssistantTypesEdit } from "./assistantTypes/AssistantTypesEdit";
import { AssistantTypesShow } from "./assistantTypes/AssistantTypesShow";
import { AccessLogsList } from "./accessLogs/AccessLogsList";
import { AccessLogsCreate } from "./accessLogs/AccessLogsCreate";
import { AccessLogsEdit } from "./accessLogs/AccessLogsEdit";
import { AccessLogsShow } from "./accessLogs/AccessLogsShow";
import { ActivityLogList } from "./activityLog/ActivityLogList";
import { ActivityLogCreate } from "./activityLog/ActivityLogCreate";
import { ActivityLogEdit } from "./activityLog/ActivityLogEdit";
import { ActivityLogShow } from "./activityLog/ActivityLogShow";
import { AssistantSettingsList } from "./assistantSettings/AssistantSettingsList";
import { AssistantSettingsCreate } from "./assistantSettings/AssistantSettingsCreate";
import { AssistantSettingsEdit } from "./assistantSettings/AssistantSettingsEdit";
import { AssistantSettingsShow } from "./assistantSettings/AssistantSettingsShow";
import { SessionStatusesList } from "./sessionStatuses/SessionStatusesList";
import { SessionStatusesCreate } from "./sessionStatuses/SessionStatusesCreate";
import { SessionStatusesEdit } from "./sessionStatuses/SessionStatusesEdit";
import { SessionStatusesShow } from "./sessionStatuses/SessionStatusesShow";
import { MessageTypesList } from "./messageTypes/MessageTypesList";
import { MessageTypesCreate } from "./messageTypes/MessageTypesCreate";
import { MessageTypesEdit } from "./messageTypes/MessageTypesEdit";
import { MessageTypesShow } from "./messageTypes/MessageTypesShow";
import { ClientsList } from "./clients/ClientsList";
import { ClientsCreate } from "./clients/ClientsCreate";
import { ClientsEdit } from "./clients/ClientsEdit";
import { ClientsShow } from "./clients/ClientsShow";
import { SessionsList } from "./sessions/SessionsList";
import { SessionsCreate } from "./sessions/SessionsCreate";
import { SessionsEdit } from "./sessions/SessionsEdit";
import { SessionsShow } from "./sessions/SessionsShow";
import { AssistantsList } from "./assistants/AssistantsList";
import { AssistantsCreate } from "./assistants/AssistantsCreate";
import { AssistantsEdit } from "./assistants/AssistantsEdit";
import { AssistantsShow } from "./assistants/AssistantsShow";
import { UserTypesList } from "./userTypes/UserTypesList";
import { UserTypesCreate } from "./userTypes/UserTypesCreate";
import { UserTypesEdit } from "./userTypes/UserTypesEdit";
import { UserTypesShow } from "./userTypes/UserTypesShow";
import { ProvidersList } from "./providers/ProvidersList";
import { ProvidersCreate } from "./providers/ProvidersCreate";
import { ProvidersEdit } from "./providers/ProvidersEdit";
import { ProvidersShow } from "./providers/ProvidersShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { MessagesList } from "./messages/MessagesList";
import { MessagesCreate } from "./messages/MessagesCreate";
import { MessagesEdit } from "./messages/MessagesEdit";
import { MessagesShow } from "./messages/MessagesShow";
import { IndustriesList } from "./industries/IndustriesList";
import { IndustriesCreate } from "./industries/IndustriesCreate";
import { IndustriesEdit } from "./industries/IndustriesEdit";
import { IndustriesShow } from "./industries/IndustriesShow";
import { ConversationsList } from "./conversations/ConversationsList";
import { ConversationsCreate } from "./conversations/ConversationsCreate";
import { ConversationsEdit } from "./conversations/ConversationsEdit";
import { ConversationsShow } from "./conversations/ConversationsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DigitalHumansWebApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OpenAiAssistant"
          list={OpenAiAssistantList}
          edit={OpenAiAssistantEdit}
          create={OpenAiAssistantCreate}
          show={OpenAiAssistantShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AssistantTypes"
          list={AssistantTypesList}
          edit={AssistantTypesEdit}
          create={AssistantTypesCreate}
          show={AssistantTypesShow}
        />
        <Resource
          name="AccessLogs"
          list={AccessLogsList}
          edit={AccessLogsEdit}
          create={AccessLogsCreate}
          show={AccessLogsShow}
        />
        <Resource
          name="ActivityLog"
          list={ActivityLogList}
          edit={ActivityLogEdit}
          create={ActivityLogCreate}
          show={ActivityLogShow}
        />
        <Resource
          name="AssistantSettings"
          list={AssistantSettingsList}
          edit={AssistantSettingsEdit}
          create={AssistantSettingsCreate}
          show={AssistantSettingsShow}
        />
        <Resource
          name="SessionStatuses"
          list={SessionStatusesList}
          edit={SessionStatusesEdit}
          create={SessionStatusesCreate}
          show={SessionStatusesShow}
        />
        <Resource
          name="MessageTypes"
          list={MessageTypesList}
          edit={MessageTypesEdit}
          create={MessageTypesCreate}
          show={MessageTypesShow}
        />
        <Resource
          name="Clients"
          list={ClientsList}
          edit={ClientsEdit}
          create={ClientsCreate}
          show={ClientsShow}
        />
        <Resource
          name="Sessions"
          list={SessionsList}
          edit={SessionsEdit}
          create={SessionsCreate}
          show={SessionsShow}
        />
        <Resource
          name="Assistants"
          list={AssistantsList}
          edit={AssistantsEdit}
          create={AssistantsCreate}
          show={AssistantsShow}
        />
        <Resource
          name="UserTypes"
          list={UserTypesList}
          edit={UserTypesEdit}
          create={UserTypesCreate}
          show={UserTypesShow}
        />
        <Resource
          name="Providers"
          list={ProvidersList}
          edit={ProvidersEdit}
          create={ProvidersCreate}
          show={ProvidersShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="Messages"
          list={MessagesList}
          edit={MessagesEdit}
          create={MessagesCreate}
          show={MessagesShow}
        />
        <Resource
          name="Industries"
          list={IndustriesList}
          edit={IndustriesEdit}
          create={IndustriesCreate}
          show={IndustriesShow}
        />
        <Resource
          name="Conversations"
          list={ConversationsList}
          edit={ConversationsEdit}
          create={ConversationsCreate}
          show={ConversationsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
