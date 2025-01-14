<template>
  <div class="agents">
    <span class="agent-handle">@Grand Deluxe Homes And Properties</span>
    <span class="location">
      <LocationIcon color="black" />
      No 6, Balogun Avenue Off Arobaba Idimu Lagos State, Lagos States, Nigeria.</span
    >
    <div class="flex-container">
      <span class="more-details">
        <HomeWork color="black" />
        <RouterLink to="/home-improvement/1">View specialist profile</RouterLink>
      </span>
      <span class="more-details">
        <BusinessIcon color="black" />
        <RouterLink to="/home-improvement/1">Interior Design</RouterLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeWork from '../svg/home-work.vue'
import LocationIcon from '../svg/location-icon.vue'
import BusinessIcon from '../svg/business-icon.vue'
</script>

<style scoped lang="scss">
.agents {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid var(--black);
  padding-bottom: 1rem;
  color: var(--black);

  .agent-handle {
    font-weight: 700;
  }

  .flex-container {
    display: flex;
    gap: 1rem;
  }

  .more-details {
    a {
      color: var(--black) !important;
      text-decoration: underline;
    }
  }

  .location,
  .more-details {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
