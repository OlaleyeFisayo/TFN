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
        <input type="radio" :name="tag" :id="option" :value="option" />
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
          :value="value"
          :v-model="value"
        />
        <slot name="right-icon"></slot>
      </div>
    </label>
  </template>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  tag: String,
  value: String || Number || null,
  options: Array<String>,
});
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
    }

    input[type="radio"]::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 100ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--black);
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }
  }
}
</style>
