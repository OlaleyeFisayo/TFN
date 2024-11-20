<template>
  <button
    :class="`app-button ${disabled && !loading && 'disabled'}`"
    :style="styleSheet[theme]"
    :disabled="disabled || loading"
  >
    <div class="app-button-loading" v-if="loading">
      <Loader :width="34" :height="34" />
    </div>
    <div class="app-button-label" v-else-if="label">{{ label }}</div>
    <div class="app-button-label" v-else>
      <slot></slot>
    </div>
    <div class="app-button-right-icon" v-if="!loading">
      <slot name="right-icon"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import Loader from "src/components/Loader.vue";

defineProps({
  label: String,
  theme: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const styleSheet = {
  primary: {
    background: "var(--wine)",
    color: "var(--white)",
    border: "1px solid var(--wine)",
  },
  secondary: {
    background: "var(--grey2)",
    color: "var(--black)",
    border: "1px solid var(--grey2)",
  },
  serviceAuth: {
    background: "var(--white)",
    color: "var(--black)",
    border: "2.5px solid var(--grey)",
  },
};
</script>

<style scoped lang="scss">
.app-button {
  width: 100%;
  display: flex;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #ccc;
    color: #999;
  }

  .app-button-loading {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: not-allowed;
  }

  .app-button-label {
    padding: 0.75rem;
    width: 100%;
    font-size: 0.9rem;
    outline: none;
  }

  .app-button-right-icon {
    background: var(--wine2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
