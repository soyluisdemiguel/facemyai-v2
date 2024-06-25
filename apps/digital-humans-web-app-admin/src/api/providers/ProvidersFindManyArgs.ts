import { ProvidersWhereInput } from "./ProvidersWhereInput";
import { ProvidersOrderByInput } from "./ProvidersOrderByInput";

export type ProvidersFindManyArgs = {
  where?: ProvidersWhereInput;
  orderBy?: Array<ProvidersOrderByInput>;
  skip?: number;
  take?: number;
};
