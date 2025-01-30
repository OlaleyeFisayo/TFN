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
    <div>
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
    <div>
      <q-btn
        no-caps
        unelevated
        @click="toggleFilterModal"
        :text-color="colours.wine"
        dense
        padding="0"
        label="More Filter Options"
        class="mt-2 more-filter-options"
      />
    </div>
  </div>
  <AppModal
    title="More Filter Options"
    :persistent="true"
    :visible="moreFilterModal"
    @close="toggleFilterModal"
  >
    <template #body>
      <div class="form mt-4">
        <div class="item" v-for="form in moreFilterValues" :key="form.tag">
          <span class="label">{{ form.label }}</span>
          <template v-if="form.type === 'text'">
            <q-input
              dense
              outlined
              v-model="form.value"
              :placeholder="form.placeholder"
              :color="colours.wine"
            />
          </template>
          <template v-else>
            <q-select
              v-model="form.value"
              :options="form.options"
              outlined
              :color="colours.wine"
              dense
            />
          </template>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { colours } from 'src/helpers/stylesheet'
import { reactive, ref, watch } from 'vue'
import AppModal from './AppModal.vue'
import { convertToObject } from 'src/helpers'

const model = reactive({
  byType: '',
  byLocation: '',
  moreFilter: [],
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
  } else {
    options.byLocation = byLocationOptions
  }
}

const moreFilterModal = ref(false)
const toggleFilterModal = () => {
  moreFilterModal.value = !moreFilterModal.value
}
const moreFilterValues = ref([
  {
    label: 'Type',
    tag: 'type',
    options: ['All Types', 'Flat/Apartment', 'House', 'Land', 'Commercial Property'],
    value: 'All Types',
  },
  {
    label: 'Bedrooms',
    tag: 'bedrooms',
    options: ['Any', '1', '2', '3', '4', '5', '6+'],
    value: 'Any',
  },
  {
    label: 'Min Price',
    tag: 'min_price',
    options: [
      'No Min',
      '₦250,000',
      '₦500,000',
      '₦750,000',
      '₦1 Million',
      '₦2 Million',
      '₦5 Million',
      '₦10 Million',
      '₦20 Million',
      '₦30 Million',
      '₦40 Million',
      '₦50 Million',
      '₦60 Million+',
    ],
    value: 'No Min',
  },
  {
    label: 'Max Price',
    tag: 'max_price',
    options: [
      'No Max',
      '₦250,000',
      '₦500,000',
      '₦750,000',
      '₦1 Million',
      '₦2 Million',
      '₦5 Million',
      '₦10 Million',
      '₦20 Million',
      '₦30 Million',
      '₦40 Million',
      '₦50 Million',
      '₦60 Million+',
    ],
    value: 'No Max',
  },
  {
    label: 'Listing Type',
    tag: 'listing_type',
    options: ['Anyone', 'Landlord', 'Agent', 'Property Manager', 'Owner'],
    value: 'Anyone',
  },
  {
    label: 'Property Status',
    tag: 'property_status',
    options: [
      'Any',
      'Coming Soon',
      ' Improved',
      'Accepting Backup offers',
      'Pending & Under Contract',
    ],
    value: 'Any',
  },
  {
    label: 'Parking Spot',
    tag: 'parking_spot',
    options: ['Any', '1', '2', '3', '4', '5+'],
    value: 'Any',
  },
  {
    label: 'Square feet',
    tag: 'square_feet',
    type: 'text',
    value: null,
    placeholder: 'e.g 1',
  },
  {
    label: 'Year Built',
    tag: 'year_built',
    options: ['Any', '1', '2', '3', '4', '5+'],
    value: 'Any',
  },
  {
    label: 'No of Stories',
    tag: 'no_of_stories',
    options: ['Any', '1', '2', '3', '4', '5+'],
    value: 'Any',
  },
  {
    label: 'Other Amenities',
    tag: 'other_amenities',
    options: ['Any', 'Air Condition', 'Pool', 'Water front', 'Others'],
    value: 'Any',
  },
  {
    label: 'Day Listed',
    tag: 'day_listed',
    options: ['Any', 'This week', 'Last Week', 'Last Month', 'Last Year'],
    value: 'Any',
  },
  {
    label: 'Furnishing',
    tag: 'furnishing',
    options: ['Any', 'Furnished', 'Not Furnished'],
    value: 'Any',
  },
])

watch(
  () => moreFilterValues,
  (n) => {
    if (n) {
      const object = convertToObject(moreFilterValues.value)
      model.moreFilter.push(object)
    }
  },
  {
    deep: true,
  },
)

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

.form {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
}
</style>
