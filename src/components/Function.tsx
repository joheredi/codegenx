// src/components/Function.tsx
import { code } from "../jsxFactory.js";

interface FunctionProps {
  name: string;
  returnType: string;
  params?: string[];
  children?: any;
}

// TODO: Handle params better to support types, default values, etc
export function Function({
  name,
  returnType,
  params = [],
  children,
}: FunctionProps) {
  return code`
    export function ${name}(${params.join(", ")}): ${returnType} {
      ${children}
    }
  `;
}
