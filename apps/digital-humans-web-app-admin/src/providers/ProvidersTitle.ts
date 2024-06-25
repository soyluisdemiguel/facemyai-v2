import { Providers as TProviders } from "../api/providers/Providers";

export const PROVIDERS_TITLE_FIELD = "id";

export const ProvidersTitle = (record: TProviders): string => {
  return record.id?.toString() || String(record.id);
};
