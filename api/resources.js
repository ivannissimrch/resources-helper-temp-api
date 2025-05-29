import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const filePath = path.resolve("./data/resources.json");
  const data = readFileSync(filePath, "utf-8");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
}
