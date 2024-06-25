import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASSISTANTS_TITLE_FIELD } from "./AssistantsTitle";

export const AssistantsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="OpenAIAssistantID" source="openAiAssistantId" />
        <TextField label="TypeID" source="typeId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AssistantSettings"
          target="assistantId"
          label="AssistantSettingsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Assistant"
              source="assistants.id"
              reference="Assistants"
            >
              <TextField source={ASSISTANTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="SettingName" source="settingName" />
            <TextField label="SettingValue" source="settingValue" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
