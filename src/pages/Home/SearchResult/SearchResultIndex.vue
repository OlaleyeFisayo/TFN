<template>
  <AppNavbar title="Search Results" />
  <section class="top-section">
    <div class="section">
      <p>2 Bedroom Serviced, Shared and Furnished Flats for sale in Nigeria</p>
    </div>
  </section>
  <section class="quick-filter">
    <div class="section">
      <h6 class="title">Quick Filters</h6>
      <div class="filter-options">
        <AppQuickFilter @@update:v-model="(val) => updateFilter(val)" />
      </div>
    </div>
  </section>
  <section class="listing">
    <div class="section">
      <p class="agent-listing-results">Results 1 - 5 of 5</p>
      <div class="line mt-2 mb-2"></div>
      <q-select
        :options="['Default', 'Sale', 'Rent']"
        outlined
        :color="colours.wine"
        dense
        v-model="listingFilter"
        class="app-select"
      />
    </div>
  </section>
  <section class="properties">
    <div class="section">
      <AppGrid2>
        <AppProperty />
        <AppProperty />
        <AppProperty />
        <AppProperty />
        <AppProperty />
      </AppGrid2>
    </div>
  </section>
  <section class="share">
    <div class="section">
      <p class="title">Share this Property</p>
      <div class="line"></div>
      <div class="social-links">
        <FacebookIcon size="30" />
        <InstagramIcon size="30" />
        <YoutubeIcon color="#161515" />
        <LinkedInIcon color="#161515" />
      </div>
    </div>
  </section>
  <section class="post-request">
    <div class="section">
      <h6>Can't Find what you are looking for?</h6>
      <q-btn :color="colours.grey" label="Post a Request" no-caps class="mt-3" to="/post-request" />
    </div>
  </section>
</template>

<script setup>
import { FacebookIcon, InstagramIcon } from 'lucide-vue-next'
import LinkedInIcon from 'src/components/svg/linkedIn-icon.vue'
import YoutubeIcon from 'src/components/svg/youtube-icon.vue'
import AppGrid2 from 'src/components/ui/AppGrid2.vue'
import AppNavbar from 'src/components/ui/AppNavbar.vue'
import AppProperty from 'src/components/ui/AppProperty.vue'
import AppQuickFilter from 'src/components/ui/AppQuickFilter.vue'
import { colours } from 'src/helpers/stylesheet'
import { reactive, ref } from 'vue'

const listingFilter = ref('Default')

const quickFilterByType = reactive({
  byType: '',
  byLocation: '',
})
const updateFilter = (value) => {
  const { byType, byLocation } = value
  quickFilterByType.byType = byType
  quickFilterByType.byLocation = byLocation
}
</script>

<style lang="scss" scoped>
@import url('./SearchResultIndex.scss');
</style>
