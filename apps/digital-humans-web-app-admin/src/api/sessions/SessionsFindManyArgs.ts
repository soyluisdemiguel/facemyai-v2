import { SessionsWhereInput } from "./SessionsWhereInput";
import { SessionsOrderByInput } from "./SessionsOrderByInput";

export type SessionsFindManyArgs = {
  where?: SessionsWhereInput;
  orderBy?: Array<SessionsOrderByInput>;
  skip?: number;
  take?: number;
};
