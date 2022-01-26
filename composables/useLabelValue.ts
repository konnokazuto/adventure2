import type { Ref } from "nuxt3/dist/app/compat/capi";
export const updateLabel = (label: Ref<string>) => (text: string) => {
  label.value = text;
};
export const useLabelValue = () => {
  const value = useState("inputValue", () => "");
  return {
    labelText: readonly(value),
    updateLabel: updateLabel(value),
  };
};
