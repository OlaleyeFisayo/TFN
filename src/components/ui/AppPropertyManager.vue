<template>
  <div class="agents">
    <span class="agent-handle">@Tulph Property Management</span>
    <span class="location">
      <LocationIcon color="black" />
      Suite A10a, Plaza Wuse Zone 6 Abuja, Abuja, F.C.T, Nigeria.</span
    >
    <span class="more-details">
      <q-icon name="language" size="23px" />
      <p>https://tulphproperty.tfnproperties.com/</p>
    </span>
    <span class="more-details">
      <HomeWork color="black" />
      <RouterLink to="/property-manager/1">View Managers profile</RouterLink>
    </span>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeWork from '../svg/home-work.vue'
import LocationIcon from '../svg/location-icon.vue'
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
    gap: 0.8rem;
  }
}
</style>
