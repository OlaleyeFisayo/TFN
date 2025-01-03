<template>
  <svg :width="width" :height="height" fill="none">
    <path
      d="M12 1.39758L1.17188 8.61633V13.6023L12 6.38358L22.8281 13.6023V8.61633L12 1.39758ZM12 7.3996L4.92188 12.1773V16.4093L12 11.6316L19.0781 16.4093V12.1773L12 7.3996ZM12 12.6496L7.92188 15.4023V18.5711L12 15.8523L16.0781 18.5711V15.4023L12 12.6496ZM12 16.8663L7.92188 19.5851V22.6023L12 19.8836L16.0781 22.6023V19.5851L12 16.8663Z"
      :fill="color"
    />
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
