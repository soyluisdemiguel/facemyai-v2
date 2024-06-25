import { AccessLogsWhereInput } from "./AccessLogsWhereInput";
import { AccessLogsOrderByInput } from "./AccessLogsOrderByInput";

export type AccessLogsFindManyArgs = {
  where?: AccessLogsWhereInput;
  orderBy?: Array<AccessLogsOrderByInput>;
  skip?: number;
  take?: number;
};
