import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AssistantSettingsTitle } from "../assistantSettings/AssistantSettingsTitle";

export const AssistantsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
