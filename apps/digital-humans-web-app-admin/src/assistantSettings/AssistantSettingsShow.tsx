import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ASSISTANTS_TITLE_FIELD } from "../assistants/AssistantsTitle";

export const AssistantSettingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
