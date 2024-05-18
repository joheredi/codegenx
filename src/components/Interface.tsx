import { code } from "../jsxFactory.js";

export interface ResponseInterfaceProps {
  name: string;
  children?: any;
}

// TODO: Support `extends` and `implements` also other things like export or not and templates
export function Interface({ name, children }: ResponseInterfaceProps) {
  return code`
  export interface ${name} {
    ${children}
  }
  `;
}
