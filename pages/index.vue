<template>
  <div>
    hoge
    <InputText @on-input="onInput" />
    <Label :text="labelValue" />
  </div>
</template>

<script setup lang="ts">
const labelValue = ref("");
const { labelText, updateLabel } = useLabelValue();
const onInput = (text: string) => {
  labelValue.value = text;
};
const onClickLink = () => {
  updateLabel(labelValue.value);
};
</script>
