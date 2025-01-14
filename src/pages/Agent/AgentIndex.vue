<template>
  <AppNavbar title="Agent" />
  <section class="agent-section">
    <div class="top section">
      <q-input
        placeholder="Search by Location or Company Name"
        dense
        outlined
        :color="colours.wine"
        v-model="searchInput"
      />
      <div class="other-options mt-4">
        <q-select
          :options="searchOptions"
          dense
          outlined
          :color="colours.wine"
          v-model="searchOptionValue"
        />
        <q-btn label="Search" no-caps :color="colours.wine" :disable="searchInput === ''" />
      </div>
    </div>
    <div class="section results mt-4">
      <div class="total">
        <span>Results 1 - 5 of 5</span>
      </div>
    </div>
    <div class="agent-list section mt-4">
      <AppAgents />
      <AppAgents />
      <AppAgents />
      <AppAgents />
      <AppAgents />
    </div>
    <div class="mt-4 section pagination">
      <q-btn no-caps :color="colours.wine" label="Previous" icon="arrow_circle_left"></q-btn>
      <q-btn label="Next" no-caps :color="colours.wine" icon-right="arrow_circle_right" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppAgents from 'src/components/ui/AppAgents.vue'
import AppNavbar from 'src/components/ui/AppNavbar.vue'
import { colours } from 'src/helpers/stylesheet'
import { ref } from 'vue'

const searchInput = ref('')
const searchOptions = ['All', 'Sale', 'Sold', 'Rent']
const searchOptionValue = ref('All')
</script>

<style scoped lang="scss">
@import url('./AgentIndex.scss');
</style>
