<template>
  <button class="es-button">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { buttonProps } from "./button";
defineOptions({
  name: "EsButton",
});

const props = defineProps(buttonProps);
</script>

<style lang="scss">
.es-button {
  background: #f00;
}
</style>
