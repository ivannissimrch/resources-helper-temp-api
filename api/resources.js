import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  const filePath = path.join(__dirname, "../data/resources.json");
  const data = readFileSync(filePath, "utf-8");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
}
