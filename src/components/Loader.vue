<template>
  <div class="loader" :style="loaderStyleSheet">
    <div class="progress-circle">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path
          class="circle"
          stroke-dasharray="75, 100"
          d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
    <div class="icon-container">
      <img src="src/assets/svg/logo.svg" alt="logo loader" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
});

const loaderStyleSheet = computed(() => ({
  width: `${props.width}px !important`,
  height: `${props.height}px !important`,
}));
</script>

<style scoped lang="scss">
.loader {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .progress-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .circular-chart {
      width: 100%;
      height: 100%;
      animation: rotateElement 2s linear infinite;
    }

    .circle {
      fill: none;
      stroke: var(--wine);
      stroke-width: 4;
      stroke-linecap: round;
      transition: stroke-dasharray 0.5s ease;
    }
  }

  .icon-container {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    width: 85.3%;
    height: 85.3%;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 100%;
      height: auto;
    }
  }
}

@keyframes rotateElement {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg); /* -90deg + 360deg = full rotation */
  }
}
</style>
