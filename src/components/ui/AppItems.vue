<template>
  <div class="box-container">
    <div class="img-side">
      <img :src="image" alt="testing" />
    </div>
    <div class="text-side">
      <h1 class="building-name">{{ name }}</h1>
      <p class="min-description">{{ rooms }}</p>
    </div>
    <div class="price">
      <span>₦{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  rooms: String,
  image: String,
  price: String,
})
</script>

<style scoped lang="scss">
.box-container {
  width: 100%;
  cursor: pointer;
  position: relative;
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

  .price {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    padding: 0.2rem;
    border-radius: 0.2rem;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.55);
  }
}
</style>
