<template>
  <section class="calender-section">
    <nav class="calender-topbar">
      <RouterLink to="/" class="backarrow-button">
        <arrowBack />
      </RouterLink>
      <h3>Calender</h3>
      <div></div>
    </nav>
    <main class="calender-main">
      <q-date v-model="date" minimal :color="colours.wine" />
    </main>
  </section>
</template>

<script setup>
import arrowBack from 'src/components/svg/arrow-back.vue'
import { colours } from 'src/helpers/stylesheet'
import { ref } from 'vue'

const date = ref('')
</script>

<style scoped>
@import url('./CalenderIndex.scss');
</style>
