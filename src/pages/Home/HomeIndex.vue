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
    <div class="nearby-places">
      <h1>Nearby Places</h1>
      <AppGrid>
        <AppItems />
        <AppItems />
      </AppGrid>
    </div>
    <div class="about-us">
      <h1 class="header">About Us</h1>
      <div class="content">
        <div class="left-side">
          <p class="paragraph">
            Our area of focus is the TFN Properties which has existed fromtime
            immemorial. Overtime, the Buinsess has grown into amass of wealth
            across nations with evolving business models. For instance, in
            sub-sahara africa, the Real Estate business is fast developing and
            becoming the main stream of income to many.
          </p>
          <p class="paragraph">
            The Real Estate business with its innumerable opportunities leaves
            an assurance of wealth, in as much as human must always NEED a
            shelter to reside.
          </p>
          <p class="paragraph">
            As it continues to develop in Africa, we deem it wise to tap into
            this wealth by easing the burden of rent payments as well as
            property management via out web and mobile application
          </p>
        </div>
        <div class="right-side">
          <AppButton theme="primary" label="Learn more" />
          <div class="info-box">
            <h1 class="stat">1200+</h1>
            <p>Agent/Property Manager/Renovator</p>
          </div>
          <div class="info-box-wrap">
            <div class="info-box">
              <h1 class="stat">8000+</h1>
              <p>Property Listing</p>
            </div>
            <div class="info-box">
              <h1 class="stat">120</h1>
              <p>Areas Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partners">
      <h1 class="header">Our Partners</h1>
      <div class="content">
        <div class="img-container">
          <img src="src/assets/image/partners-3.png" alt="partners-3" />
        </div>
        <div class="img-container">
          <img src="src/assets/image/partners-1.png" alt="partners-3" />
        </div>
        <div class="img-container">
          <img src="src/assets/image/partners-2.png" alt="partners-3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppInput from "src/components/ui/AppInput.vue";
import Search from "src/components/svg/search.vue";
import { ref } from "vue";
import AppButton from "src/components/ui/AppButton.vue";
import AppGrid from "src/components/ui/AppGrid.vue";
import AppItems from "../../components/ui/AppItems.vue";

// Search Section
const searchInput = ref("");

// Image Slider Componentx
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
