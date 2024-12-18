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
          :type="type"
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
        class="checkbox"
        v-for="(option, index) in options"
        :key="index"
        :for="option"
      >
        <input
          :type="type"
          :name="option"
          :id="option"
          :value="option"
          v-model="modelValue"
        />
        <span>{{ option }}</span>
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
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
  value: [String, Number, null, undefined, Array],
  options: {
    type: Array<String>,
    default: [],
  },
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

      &::placeholder {
        font-style: italic;
        color: #999;
      }
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
      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid var(--black);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }

    input[type="radio"]::before {
      content: "";
      //   width: 0.66em;
      //   height: 0.66em;
      width: 85%;
      height: 85%;
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
    align-items: flex-start;
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
      border: 0.15em solid var(--wine2);
      cursor: pointer;
      display: flex;
      padding: 0.05rem;
      justify-content: center;
      align-items: center;
    }

    input[type="checkbox"]::before {
      content: "";
      width: 0.65em;
      height: 90%;
      transform: scale(0);
      transition: 100ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--wine2);
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }
  }
}
</style>
