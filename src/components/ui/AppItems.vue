<template>
  <div class="box-container">
    <div class="img-side">
      <img src="src/assets/image/slider-3.jpg" alt="testing" />
    </div>
    <div class="text-side">
      <h1 class="building-name">Chimney Villa</h1>
      <p class="min-description">3 Bedrooms, 1 Parlour</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  description: String,
  image: String,
  price: String,
});
</script>

<style scoped lang="scss">
.box-container {
  width: fit-content;
  width: 100%;
  cursor: pointer;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }

  .img-side {
    height: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 0.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .text-side {
    .building-name {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
    .min-description {
      font-size: 0.95rem;
    }
  }
}
</style>
