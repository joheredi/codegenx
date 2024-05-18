import prettier from "prettier";
import { code } from "../jsxFactory.js";

interface PrettierProps {
  children?: any;
}

export async function Prettier({ children }: PrettierProps) {
  const rawCode = Array.isArray(children) ? children.join("") : children;
  const formattedCode = await prettier.format(rawCode, {
    parser: "typescript",
  });

  return code`${formattedCode}`;
}
