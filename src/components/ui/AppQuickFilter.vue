<template>
  <div>
    <div class="button-toggles">
      <q-btn-toggle
        v-model="model.byType"
        :toggle-color="colours.wine"
        :options="options.byType"
        dense
        flat
        no-wrap
        no-caps
        class="btn-toggle"
      />
      <q-btn-toggle
        v-model="model.byLocation"
        :toggle-color="colours.wine"
        :options="options.byLocation"
        dense
        flat
        no-wrap
        no-caps
        class="btn-toggle"
      />
    </div>
    <q-btn
      no-caps
      unelevated
      @click="toggleMoreOptions"
      :text-color="colours.wine"
      dense
      padding="0"
      :label="moreOptions ? 'Show less' : 'Show more'"
      class="mt-2"
    />
  </div>
</template>

<script setup>
import { colours } from 'src/helpers/stylesheet'
import { reactive, ref, watch } from 'vue'

const model = reactive({
  byType: '',
  byLocation: '',
})
const emit = defineEmits(['@update:v-model'])

const byLocationOptions = [
  { label: 'Abia', value: 'abia' },
  { label: 'Adamawa', value: 'adamawa' },
  { label: 'Akwa Ibom', value: 'akwa_ibom' },
  { label: 'Anambra', value: 'anambra' },
  { label: 'Bauchi', value: 'bauchi' },
  { label: 'Bayelsa', value: 'bayelsa' },
  { label: 'Benue', value: 'benue' },
  { label: 'Borno', value: 'borno' },
]
const extraByLocationOptions = [
  { label: 'Cross River', value: 'cross_river' },
  { label: 'Delta', value: 'delta' },
  { label: 'Ebonyi', value: 'ebonyi' },
  { label: 'Edo', value: 'edo' },
  { label: 'Ekiti', value: 'ekiti' },
  { label: 'Enugu', value: 'enugu' },
  { label: 'Gombe', value: 'gombe' },
  { label: 'Imo', value: 'imo' },
  { label: 'Jigawa', value: 'jigawa' },
  { label: 'Kaduna', value: 'kaduna' },
  { label: 'Kano', value: 'kano' },
  { label: 'Katsina', value: 'katsina' },
  { label: 'Kebbi', value: 'kebbi' },
  { label: 'Kogi', value: 'kogi' },
  { label: 'Kwara', value: 'kwara' },
  { label: 'Lagos', value: 'lagos' },
  { label: 'Nasarawa', value: 'nasarawa' },
  { label: 'Niger', value: 'niger' },
  { label: 'Ogun', value: 'ogun' },
  { label: 'Ondo', value: 'ondo' },
  { label: 'Osun', value: 'osun' },
  { label: 'Oyo', value: 'oyo' },
  { label: 'Plateau', value: 'plateau' },
  { label: 'Rivers', value: 'rivers' },
  { label: 'Sokoto', value: 'sokoto' },
  { label: 'Taraba', value: 'taraba' },
  { label: 'Yobe', value: 'yobe' },
  { label: 'Zamfara', value: 'zamfara' },
]
const options = reactive({
  byType: [
    { label: 'Flats', value: 'flats' },
    { label: 'Commercial Property', value: 'commercial_property' },
    { label: 'Land', value: 'land' },
    { label: 'Event Centres/Venues', value: 'event_centres_venues' },
    { label: 'Houses', value: 'houses' },
  ],
  byLocation: byLocationOptions,
})

const moreOptions = ref(false)
const toggleMoreOptions = () => {
  moreOptions.value = !moreOptions.value
  if (moreOptions.value) {
    options.byLocation = [...byLocationOptions, ...extraByLocationOptions]
  } else  {
    options.byLocation = byLocationOptions
  }
}

watch(
  () => model,
  (n) => {
    emit('@update:v-model', n)
  },
  {
    deep: true,
  },
)
</script>

<style lang="scss" scoped>
.button-toggles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-toggle {
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
