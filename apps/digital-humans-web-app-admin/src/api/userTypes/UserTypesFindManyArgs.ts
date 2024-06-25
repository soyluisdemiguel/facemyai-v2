import { UserTypesWhereInput } from "./UserTypesWhereInput";
import { UserTypesOrderByInput } from "./UserTypesOrderByInput";

export type UserTypesFindManyArgs = {
  where?: UserTypesWhereInput;
  orderBy?: Array<UserTypesOrderByInput>;
  skip?: number;
  take?: number;
};
