<template>
  <template v-if="type === 'radio'">
    <p>{{ label }}</p>
    <div class="radio-container">
      <label
        class="radio"
        v-for="(option, index) in options"
        :key="index"
        :for="option"
      >
        <input
          type="radio"
          :name="tag"
          :id="option"
          :value="option"
          v-model="modelValue"
        />
        <span> {{ option }}</span>
      </label>
    </div>
  </template>
  <template v-else-if="type === 'checkbox'">
    <div class="checkbox-container">
      <label
        class="radio"
        v-for="(option, index) in options"
        :key="index"
        :for="option"
      >
        <input
          type="checkbox"
          :name="option"
          :id="option"
          :value="option"
          v-model="modelValue"
        />
        <span> {{ option }}</span>
      </label>
    </div>
  </template>
  <template v-else>
    <label class="input" :for="tag">
      <p>{{ label }}</p>
      <div class="input-container">
        <input
          :type="type"
          :name="tag"
          :id="tag"
          :placeholder="placeholder"
          v-model="modelValue"
        />
        <slot name="right-icon"></slot>
      </div>
    </label>
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  tag: String,
  value: [String, Number, null, undefined],
  options: Array<String>,
});

const emit = defineEmits(["update:model-value"]);
const modelValue = ref(props.value);

watch(
  () => modelValue.value,
  (n) => {
    emit("update:model-value", n);
  },
);
</script>

<style scoped lang="scss">
p {
  font-size: 1rem;
  text-transform: capitalize;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .input-container {
    width: 100%;
    height: auto;
    display: flex;
    border: 1px solid var(--grey);
    align-items: center;
    padding-right: 0.3rem;

    input {
      background: inherit;
      padding: 0.7rem 0.8rem;
      border: 0;
      outline: none;
      display: block;
      width: 100%;
    }
  }
}

.radio-container {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  & > label {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;

    span {
      text-transform: capitalize;
    }

    input[type="radio"] {
      appearance: none;
      background-color: inherit;
      margin: 0;
      font: inherit;
      color: inherit;
      width: 1em;
      height: 1em;
      border: 0.15em solid var(--black);
      cursor: pointer;
      display: grid !important;
      place-content: center !important;
      border-radius: 50%;
    }

    input[type="radio"]::before {
      content: "";
      width: 0.67em;
      height: 0.65em;
      transform: scale(0);
      transition: 100ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--black);
      border-radius: 50%;
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }
  }
}

.checkbox-container {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  & > label {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;

    span {
      text-transform: capitalize;
    }

    input[type="checkbox"] {
      appearance: none;
      background-color: inherit;
      margin: 0;
      font: inherit;
      color: inherit;
      width: 1em;
      height: 1em;
      border: 0.15em solid var(--black);
      cursor: pointer;
      display: grid !important;
      place-content: center !important;
    }

    input[type="checkbox"]::before {
      content: "";
      width: 0.67em;
      height: 0.67em;
      transform: scale(0);
      transition: 100ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--black);
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }
  }
}
</style>
