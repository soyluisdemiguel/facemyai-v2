import { UserTypes as TUserTypes } from "../api/userTypes/UserTypes";

export const USERTYPES_TITLE_FIELD = "id";

export const UserTypesTitle = (record: TUserTypes): string => {
  return record.id?.toString() || String(record.id);
};
