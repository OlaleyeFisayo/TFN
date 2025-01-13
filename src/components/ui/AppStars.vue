<template>
  <div class="app-stars">
    <div class="star">
      <Star :width="width" :color="color" />
    </div>
    <div class="star">
      <Star :width="width" :color="color" />
    </div>
    <div class="star">
      <Star :width="width" :color="color" />
    </div>
    <div class="star">
      <Star :width="width" :color="color" />
    </div>
    <div class="star">
      <Star :width="width" :color="color" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
// import StarIcon from '../svg/star-icon.vue'

defineProps({
  color: String,
  width: {
    type: Number,
    default: 20,
  },
})
</script>

<style scoped lang="scss">
.app-stars {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  .star {
    cursor: pointer;
  }
}
</style>
