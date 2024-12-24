<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
}
</style>
