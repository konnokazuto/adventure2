<template>
  <div>
    hoge
    {{ store.name }}
    <AtomsInputText @on-input="onInput" />
    <AtomsLabel :text="labelValue" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store";
const labelValue = ref("");
const { labelText, updateLabel } = useLabelValue();
const onInput = (text: string) => {
  labelValue.value = text;
};
const onClickLink = () => {
  updateLabel(labelValue.value);
};
const store = useStore();
</script>
