<template>
  <section class="home-section">
    <div class="search-section">
      <AppInput placeholder="Search" :value="searchInput" v-model="searchInput">
        <template #left-icon>
          <Search color="#898989" />
        </template>
      </AppInput>
    </div>
    <div class="img-slider">
      <div class="black-background"></div>
      <template v-for="(content, index) in imgSliderContent" :key="index">
        <template v-if="content.isActive">
          <div class="img">
            <img :src="content.img" :alt="content.title" />
          </div>
          <h1 v-if="content.title" class="title">{{ content.title }}</h1>
          <p class="subtitle">{{ content.subtitle }}</p>
        </template>
      </template>
      <AppButton theme="whiteWithRed" label="Get Started" />
      <div class="slider-toggler">
        <div
          v-for="(c, i) in imgSliderContent"
          :key="i"
          :class="`toggler ${c.isActive ? 'active' : ''} ${i - 1 !== -1 ? 'left' : ''} ${c.toggleFromRight ? 'right' : ''} ${i === imgSliderContent.length - 1 && ultimateRight ? 'ultimateRight' : ''} ${i === 0 && ultimateLeft ? 'ultimateLeft' : ''}`"
          role="button"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppInput from "src/components/ui/AppInput.vue";
import Search from "src/components/svg/search.vue";
import { ref } from "vue";
import AppButton from "src/components/ui/AppButton.vue";

const searchInput = ref("");
const imgSliderContent = ref([
  {
    id: 0,
    img: "src/assets/image/slider-1.jpg",
    title: "Simplify, Optimize, Succeed:",
    subtitle: "Your Property Management Solution",
    isActive: true,
    toggleFromRight: false,
  },
  {
    id: 1,
    img: "src/assets/image/slider-2.jpg",
    subtitle: "Your Gateway to Seamless Property Management",
    isActive: false,
    toggleFromRight: false,
  },
  {
    id: 2,
    img: "src/assets/image/slider-3.jpg",
    subtitle: "Effortless Property Management, Elevated.",
    isActive: false,
    toggleFromRight: false,
  },
  {
    id: 3,
    img: "src/assets/image/slider-4.jpg",
    subtitle: "Your Partner in Property Success.",
    isActive: false,
    toggleFromRight: false,
  },
]);
const toggleSlider = (index: number) => {
  const prevIndex = index - 1;
  imgSliderContent.value.forEach((content, i) => {
    content.isActive = i === index;
    content.toggleFromRight = prevIndex === i;
  });
  console.log(imgSliderContent.value);
};
const ultimateRight = ref(false);
const ultimateLeft = ref(false);
const counter = ref(0);
setInterval(() => {
  counter.value += 1;
  if (counter.value === imgSliderContent.value.length) {
    counter.value = 0;
    ultimateLeft.value = true;
    ultimateRight.value = true;
  } else {
    ultimateLeft.value = false;
    ultimateRight.value = false;
  }
  toggleSlider(counter.value);
}, 3000);
</script>

<style scoped lang="scss">
@import url("./HomeIndex.scss");
</style>
