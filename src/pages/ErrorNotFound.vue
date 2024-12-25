<template>
  <div class="not-found fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        :text-color="colours.wine"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
import { colours } from 'src/helpers/stylesheet'
</script>

<style scoped lang="scss">
.not-found {
  background: var(--wine2);
}
</style>
