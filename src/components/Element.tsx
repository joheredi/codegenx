// Define the props structure
export interface Props {
  [key: string]: any;
}

// Define the Element type
export interface Element {
  type: string | FunctionComponent<any>;
  props: Props;
  children: Element[] | string;
}

// Define FunctionComponent type for functional components
export type FunctionComponent<P = {}> = (
  props: P & { children?: Element[] | string }
) => Element;
