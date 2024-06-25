import { Clients as TClients } from "../api/clients/Clients";

export const CLIENTS_TITLE_FIELD = "id";

export const ClientsTitle = (record: TClients): string => {
  return record.id?.toString() || String(record.id);
};
