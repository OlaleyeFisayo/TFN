<template>
  <div>
    <q-btn-toggle
      v-model="model"
      :toggle-color="colours.wine"
      :options="options"
      dense
      flat
      no-wrap
      no-caps
      class="btn-toggle"
    />
  </div>
</template>

<script setup>
import { colours } from 'src/helpers/stylesheet'
import { ref, watch } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    require: true,
    default: () => [],
  },
})

const model = ref(props.options[0]?.label)
const emit = defineEmits(['@update:v-model'])

watch(
  () => model.value,
  (n) => {
    emit('@update:v-model', n)
  },
)
</script>

<style lang="scss" scoped>
.btn-toggle {
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
