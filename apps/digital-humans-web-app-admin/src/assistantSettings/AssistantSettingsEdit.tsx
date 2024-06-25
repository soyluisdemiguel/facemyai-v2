import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssistantsTitle } from "../assistants/AssistantsTitle";

export const AssistantSettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
