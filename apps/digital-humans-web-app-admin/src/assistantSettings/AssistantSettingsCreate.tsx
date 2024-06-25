import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssistantsTitle } from "../assistants/AssistantsTitle";

export const AssistantSettingsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assistant.id"
          reference="Assistants"
          label="Assistant"
        >
          <SelectInput optionText={AssistantsTitle} />
        </ReferenceInput>
        <TextInput label="SettingName" source="settingName" />
        <TextInput label="SettingValue" multiline source="settingValue" />
      </SimpleForm>
    </Create>
  );
};
