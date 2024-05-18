import { read } from "fs";
import { code } from "../jsxFactory.js";

interface PropertyProps {
  name: string;
  type: string;
  required?: boolean;
  readonly?: boolean;
}

export function Property({ name, type, required, readonly }: PropertyProps) {
  const optionality = required ? "" : "?";
  const visibility = readonly ? "readonly" : "";
  return code`
    ${visibility} ${name}${optionality}: ${type};`;
}
