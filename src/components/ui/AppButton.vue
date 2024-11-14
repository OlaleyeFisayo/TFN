<template>
  <button class="app-button" :style="styleSheet[theme]" :disabled="disabled">
    <div class="app-button-label">{{ label }}</div>
    <div class="app-button-right-icon">
      <slot name="right-icon"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  theme: String,
  disabled: {
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
    border: 1px solid #aaa;
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
