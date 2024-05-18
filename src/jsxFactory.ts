export function createElement(tag: any, props: any, ...children: any[]) {
  if (typeof tag === "function") {
    return tag({ ...props, children });
  }
  return { tag, props: { ...props, children } };
}

export function code(strings: TemplateStringsArray, ...values: any[]) {
  return strings.reduce((result, string, i) => {
    const value = values[i];

    // Join array values with proper formatting
    if (Array.isArray(value)) {
      return result + string + value.join("");
    }

    // For single values, just concatenate
    return result + string + (value || "");
  }, "");
}
