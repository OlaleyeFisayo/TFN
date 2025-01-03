<template>
  <div :class="`search-section ${isVisible ? 'show' : ''}`">
    <main class="section-content">
      <div class="search-option">
        <q-btn-toggle
          v-model="searchOption"
          :options="options"
          :toggle-color="colours.wine"
          :color="colours.black"
          spread
          no-caps=""
        />
      </div>
      <div class="search-box mt-4">
        <q-input
          dense
          outlined
          placeholder="Enter a state, locality or area"
          :color="colours.wine"
          v-model="store.searchInput"
        />
      </div>
      <AppGrid class="form mt-4">
        <div class="item" v-for="form in formValues" :key="form.tag">
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
        <template v-if="moreOptions">
          <div class="item" v-for="form in moreFormValues" :key="form.tag">
            <p class="label">{{ form.label }}</p>
            <template v-if="form.type === 'text'"
              ><q-input
                dense
                outlined
                v-model="form.value"
                :placeholder="form.placeholder"
                :color="colours.wine"
            /></template>
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
        </template>
      </AppGrid>
      <div class="center mt-4">
        <q-btn no-caps unelevated @click="toggleMoreOptions">
          <template v-if="moreOptions">
            Less Options
            <upCaret class="ml-1" color="black" />
          </template>
          <template v-else>
            More Options
            <downCaret class="ml-1" color="black" />
          </template>
        </q-btn>
      </div>
      <div class="center mt-4">
        <q-btn class="app-button primary" label="Search" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { colours } from 'src/helpers/stylesheet'
import AppGrid from 'components/ui/AppGrid.vue'
import { useSearchStore } from 'src/stores/UI/search'
import downCaret from 'components/svg/down-caret.vue'
import upCaret from 'components/svg/up-caret.vue'

defineProps({
  isVisible: Boolean,
})

const searchOption = ref('buy')
const store = useSearchStore()
const options = [
  { label: 'Buy', value: 'buy' },
  { label: 'Rent', value: 'rent' },
  { label: 'Sell', value: 'sell' },
]
const moreOptions = ref(false)
const formValues = ref([
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
])
const moreFormValues = ref([
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

const toggleMoreOptions = () => {
  moreOptions.value = !moreOptions.value
}
</script>

<style scoped lang="scss">
.search-section {
  height: calc(100dvh - 52px);
  width: 100%;
  position: absolute;
  top: 52px;
  left: 0;
  background-image: url('assets/image/agent-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 0;
  display: none;

  &.show {
    display: block;
  }
}

.section-content {
  padding: 2rem;
  background: rgba($color: #ffffff, $alpha: 0.7);
  min-height: calc(100dvh - 52px);
}

.form {
  .item {
    .label {
      color: var(--black) !important;
      z-index: 2;
    }
  }
}

.center {
  text-align: center;
}
</style>
