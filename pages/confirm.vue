<template>
  <div>
    <Label :text="labelText" />
  </div>
</template>

<script setup lang="ts">
const { labelText, updateLabel } = useLabelValue();
</script>
