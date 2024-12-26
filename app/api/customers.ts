import { customers } from "../lib/mock-data";

export default function handler(res: any) {
  res.status(200).json(customers);
}
