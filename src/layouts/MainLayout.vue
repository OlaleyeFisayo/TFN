<template>
  <section>
    <AppNavbar title="TFN Properties" />

    <div>
      <router-view />
    </div>

    <AppFooter />
  </section>
</template>

<script setup>
import AppNavbar from 'src/components/ui/AppNavbar.vue'
import AppFooter from 'src/components/ui/AppFooter.vue'
</script>

<style lang="scss" scoped>
@import url(./MainLayout.scss);
</style>
