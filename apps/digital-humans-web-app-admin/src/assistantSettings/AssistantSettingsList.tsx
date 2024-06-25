import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSISTANTS_TITLE_FIELD } from "../assistants/AssistantsTitle";

export const AssistantSettingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AssistantSettingsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
