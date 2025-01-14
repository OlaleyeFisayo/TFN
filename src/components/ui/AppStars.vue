<template>
  <div class="app-stars">
    <template v-if="activeStars > 0">
      <div class="star" v-for="(star, index) in starData" :key="index">
        <template v-if="Math.floor(activeStars) <= index">
          <q-icon name="star_outline" :size="`${width}px`" :color="color" />
        </template>
        <template v-else>
          <q-icon name="star" :size="`${width}px`" :color="color" />
        </template>
      </div>
    </template>
    <template v-else>
      <div
        class="star"
        v-for="(star, index) in starData"
        :key="index"
        @mouseover="makeActiveStateTrue(index)"
        @mouseleave="makeActiveStateFalse(-1)"
      >
        <template v-if="star.active">
          <q-icon name="star" :size="`${width}px`" :color="color" />
        </template>
        <template v-else>
          <q-icon name="star_outline" :size="`${width}px`" :color="color" />
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  color: String,
  width: {
    type: Number,
    default: 20,
  },
  activeStars: {
    type: Number,
    required: false,
    default: 0,
  },
})

const starData = ref([
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
])

const makeActiveStateTrue = (index) => {
  for (let i = 0; i <= index; i++) {
    starData.value[i].active = true
  }
}

const makeActiveStateFalse = (index) => {
  for (let i = 0; i < starData.value.length; i++) {
    starData.value[i].active = i <= index
  }
}
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
