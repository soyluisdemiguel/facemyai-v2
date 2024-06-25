import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AssistantTypesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="TypeName" source="typeName" />
      </SimpleForm>
    </Edit>
  );
};
