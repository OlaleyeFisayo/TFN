<template>
  <section class="main-layout">
    <nav class="nav-bar">
      <div class="logo">
        <TfnWhiteLogo :width="32" :height="30" />
      </div>
      <div class="company-name">TFN Properties</div>
      <ul class="nav-list">
        <li v-for="(list, index) in navList" :key="index">
          <template v-if="list.dropdown">
            <p class="title">{{ list.label }}</p>
            <DownCaret v-if="list.dropdown" :width="20" :height="20" />
            <div class="menu">
              <RouterLink
                class="item"
                v-for="nav in list.list"
                :key="nav.label"
                :to="nav.to"
              >
                <component
                  :is="nav.img"
                  color="black"
                  :width="30"
                  :height="30"
                />
                <p>{{ nav.label }}</p>
              </RouterLink>
            </div>
          </template>
          <template v-else>
            <RouterLink class="title" :to="list.to">{{
              list.label
            }}</RouterLink>
          </template>
        </li>
      </ul>
      <button class="mobile-nav-list-toggle-button" @click="toggleMobileNavBar">
        <Menu />
      </button>
    </nav>
    <div :class="`mobile-nav-list ${mobileNavvBar ? 'show' : ''}`">
      <div class="sidebar-content">
        <div class="action">
          <button class="close-btn" @click="toggleMobileNavBar">&times;</button>
        </div>
        <div class="logo-and-name">
          <div class="logo-container">
            <img
              src="src/assets/image/69bc49ac256503346b5e0f315585faa7.png"
              alt="TFN logo"
            />
          </div>
          <h1>
            TFN <br />
            Properties
          </h1>
        </div>
        <ul class="nav-list">
          <li v-for="(nav, index) in navList" :key="index">
            <template v-if="nav.dropdown">
              <div class="toggle">
                <p class="title">{{ nav.label }}</p>
                <button
                  class="toggle-button"
                  @click="toggleMobileDropdown(index)"
                >
                  <template v-if="nav.mobileDropdown">
                    <UpCaret color="black" />
                  </template>
                  <template v-else>
                    <DownCaret color="black" />
                  </template>
                </button>
              </div>
              <ul class="child" v-if="nav.mobileDropdown">
                <li v-for="list in nav.list" :key="list.label">
                  <RouterLink :to="list.to" class="title">{{
                    list.label
                  }}</RouterLink>
                </li>
              </ul>
            </template>
            <template v-else>
              <RouterLink class="title" :to="nav.to">{{
                nav.label
              }}</RouterLink>
            </template>
          </li>
        </ul>
      </div>
      <div class="darkside" @click="toggleMobileNavBar"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TfnWhiteLogo from "src/components/svg/tfn-white-logo.vue";
import { RouterLink } from "vue-router";
import DownCaret from "src/components/svg/down-caret.vue";
import Menu from "src/components/svg/menu.vue";
import RealEstateAgent from "src/components/svg/real-estate-agent.vue";
import AddHome from "src/components/svg/add-home.vue";
import PropertyTag from "src/components/svg/property-tag.vue";
import SignInSolid from "src/components/svg/sign-in-solid.vue";
import LoginBold from "src/components/svg/login-bold.vue";
import QuestionFilled from "src/components/svg/question-filled.vue";
import UpCaret from "../components/svg/up-caret.vue";

const navList = ref([
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Agent Finder",
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: "Agent",
        img: RealEstateAgent,
        to: "/agent",
      },
      {
        label: "Home Improvement",
        img: AddHome,
        to: "/home-improvement",
      },
      {
        label: "Property Manager",
        img: PropertyTag,
        to: "/property-manager",
      },
    ],
  },
  {
    label: "Calender",
    to: "/calender",
  },
  {
    label: "Buy a Property",
    to: "/buy-property",
  },
  {
    label: "Rent a Property",
    to: "/sell-property",
  },
  {
    label: "Profile",
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: "Sign In",
        img: SignInSolid,
        to: "/login",
      },
      {
        label: "Sign Up",
        img: LoginBold,
        to: "/",
      },
    ],
  },
  {
    label: "Contact Us",
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: "+2348029992888, +2348034934952",
        img: QuestionFilled,
      },
      {
        label: "tfnowandassociates@gmail.com",
        img: QuestionFilled,
      },
      {
        label: "15, Ben Bright Street, Green Field Estste, Okota, Isolo, Lagos",
        img: QuestionFilled,
      },
    ],
  },
  {
    label: "FAQs",
    to: "/faqs",
  },
  {
    label: "TFN Yearly Report",
    to: "/yearly-report",
  },
]);

const mobileNavvBar = ref(false);
const toggleMobileNavBar = () => {
  mobileNavvBar.value = !mobileNavvBar.value;
};
const toggleMobileDropdown = (index: number) => {
  navList.value[index].mobileDropdown = !navList.value[index].mobileDropdown;
};
</script>

<style scoped lang="scss">
@import url("./MainLayout.scss");
</style>
