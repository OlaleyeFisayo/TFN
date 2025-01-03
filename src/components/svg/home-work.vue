<template>
  <svg :width="width" :height="height" fill="none">
    <path
      d="M14.9849 7.5909H16.6516V5.92424H14.9849V7.5909ZM14.9849 10.9242H16.6516V9.25757H14.9849V10.9242ZM14.9849 14.2576H16.6516V12.5909H14.9849V14.2576ZM1.65161 17.5909V9.25757L7.48494 5.0909L13.3183 9.25757V17.5909H9.15161V12.5909H5.81828V17.5909H1.65161ZM14.9849 17.5909V8.42424L9.15161 4.2159V2.5909H19.9849V17.5909H14.9849Z"
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
