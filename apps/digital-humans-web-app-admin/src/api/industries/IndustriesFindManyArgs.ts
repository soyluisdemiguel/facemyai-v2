import { IndustriesWhereInput } from "./IndustriesWhereInput";
import { IndustriesOrderByInput } from "./IndustriesOrderByInput";

export type IndustriesFindManyArgs = {
  where?: IndustriesWhereInput;
  orderBy?: Array<IndustriesOrderByInput>;
  skip?: number;
  take?: number;
};
