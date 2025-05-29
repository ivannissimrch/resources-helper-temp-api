import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "tags.json");
  const data = readFileSync(filePath, "utf-8");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
}
