import { SessionStatusesWhereInput } from "./SessionStatusesWhereInput";
import { SessionStatusesOrderByInput } from "./SessionStatusesOrderByInput";

export type SessionStatusesFindManyArgs = {
  where?: SessionStatusesWhereInput;
  orderBy?: Array<SessionStatusesOrderByInput>;
  skip?: number;
  take?: number;
};
