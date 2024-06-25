import { Industries as TIndustries } from "../api/industries/Industries";

export const INDUSTRIES_TITLE_FIELD = "id";

export const IndustriesTitle = (record: TIndustries): string => {
  return record.id?.toString() || String(record.id);
};
