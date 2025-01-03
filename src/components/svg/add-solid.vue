<template>
  <svg :width="width" :height="height" fill="none">
    <mask
      id="mask0_55028_13623"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path
        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
        fill="white"
        stroke="white"
        stroke-width="1.66667"
        stroke-linejoin="round"
      />
      <path
        d="M12 8V16M8 12H16"
        stroke="black"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </mask>
    <g mask="url(#mask0_55028_13623)">
      <path d="M0 0H24V24H0V0Z" :fill="color" />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: 'white',
  },
})
</script>
