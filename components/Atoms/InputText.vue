<template>
  <div>
    <input type="text" v-model="inputValue" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "onInput", value: string): void;
}>();
const inputValue = ref("");
const onInput = () => {
  emit("onInput", inputValue.value);
};
</script>
