import { code } from "../jsxFactory.js";

interface MethodProps {
  name: string;
  returnType: string;
  children?: any;
}

// TODO: support visibilities and parameters
export function Method({ name, returnType, children }: MethodProps) {
  return code`
    ${name}(): ${returnType} {
      ${children}
    }
  `;
}
