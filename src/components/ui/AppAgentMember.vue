<template>
  <div class="agent-memeber">
    <div class="img-side">
      <img src="assets/image/user-avatar.webp" alt="User image" loading="lazy" />
    </div>
    <div class="text-side">
      <p class="agent-name">@Chrisnuella</p>
      <p class="agent-review">5.0 <StarBlue /></p>
      <p class="agent-review-numbers">49 Reviews</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarBlue from '../svg/star-blue.vue'
</script>

<style scoped lang="scss">
.agent-memeber {
  width: 100%;
  background: var(--white);
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0.5rem;

  .img-side {
    width: 65px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-side {
    color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-bottom: 1px solid var(--black);
    width: 100%;
    padding-bottom: 0.4rem;

    p {
      margin: 0;
      line-height: normal;
    }

    .agent-name {
      font-weight: 700;
    }

    .agent-review {
      font-weight: 700;
      display: flex;
    }

    .agent-review-numbers {
      text-decoration: underline;
    }
  }
}
</style>
