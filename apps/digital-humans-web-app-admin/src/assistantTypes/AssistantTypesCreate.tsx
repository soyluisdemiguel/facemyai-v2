import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AssistantTypesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="TypeName" source="typeName" />
      </SimpleForm>
    </Create>
  );
};
