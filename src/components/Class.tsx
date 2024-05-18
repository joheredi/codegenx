// src/components/Class.tsx
import { code } from "../jsxFactory.js";

interface ClassProps {
  name: string;
  children?: any;
}

export function Class({ name, children }: ClassProps) {
  // TODO: Support `extends` and `implements` also other things like export or not and templates
  return code`
    export class ${name} {
      ${children}
    }
  `;
}
