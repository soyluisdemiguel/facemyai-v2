import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AssistantSettingsTitle } from "../assistantSettings/AssistantSettingsTitle";

export const AssistantsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assistantSettingsItems"
          reference="AssistantSettings"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssistantSettingsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="OpenAIAssistantID" source="openAiAssistantId" />
        <TextInput label="TypeID" source="typeId" />
      </SimpleForm>
    </Create>
  );
};
