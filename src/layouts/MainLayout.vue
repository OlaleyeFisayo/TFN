<template>
  <q-layout view="hHh ppp lFf">
    <header elevated class="header">
      <div class="header-nav">
        <router-link to="/home" class="logo">
          <TfnWhiteLogo :width="32" :height="30" />
        </router-link>
        <q-toolbar-title class="company-name"> TFN Properties </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="white"
        />
      </div>
    </header>

    <div :class="`mobile-nav-list ${leftDrawerOpen ? 'show' : ''}`">
      <div class="sidebar-content">
        <div class="action">
          <button class="close-btn" @click="toggleLeftDrawer">&times;</button>
        </div>
        <div class="logo-and-name">
          <div class="logo-container">
            <img src="assets/image/69bc49ac256503346b5e0f315585faa7.png" alt="TFN logo" />
          </div>
          <h5>
            TFN <br />
            Properties
          </h5>
        </div>
        <ul class="nav-list">
          <li v-for="(nav, index) in navList" :key="index">
            <template v-if="nav.dropdown">
              <div class="toggle">
                <span class="title">{{ nav.label }}</span>
                <button class="toggle-button" @click="toggleMobileDropdown(index)">
                  <template v-if="nav.mobileDropdown">
                    <UpCaret color="black" :width="20" :height="20" />
                  </template>
                  <template v-else>
                    <DownCaret color="black" />
                  </template>
                </button>
              </div>
              <ul class="child" v-if="nav.mobileDropdown">
                <li v-for="list in nav.list" :key="list.label">
                  <RouterLink :to="list.to" class="title">{{ list.label }}</RouterLink>
                </li>
              </ul>
            </template>
            <template v-else>
              <RouterLink class="title" :to="nav.to">{{ nav.label }}</RouterLink>
            </template>
          </li>
        </ul>
      </div>
      <div class="darkside" @click="toggleLeftDrawer"></div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="top-footer">
      <div class="footer-content">
        <div class="logo">
          <TfnWhiteLogo :width="30" :height="30" />
          <h5>
            TFN <br />
            Properties
          </h5>
        </div>
        <ul class="footer-link">
          <h5>Useful Links:</h5>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><RouterLink to="/policy">Privacy Policy</RouterLink></li>
          <li><RouterLink to="/termsofuse">Terms of Use</RouterLink></li>
          <li><RouterLink to="/faqs">FAQs</RouterLink></li>
        </ul>
        <div class="socials">
          <facebookIcon />
          <instagramIcon />
          <youtubeIcon />
          <linkedInIcon />
        </div>
      </div>
    </footer>
    <footer class="bottom-footer">
      <div class="footer-content">
        <h5>Popular Property</h5>
        <ul>
          <li>Flats for rent in Abuja</li>
          <li>Houses for rent in Abuja</li>
          <li>Houses for sale in Abuja</li>
          <li>Land for sale in Abuja</li>
          <li>Mini Flats for rent in Abuja</li>
          <li>Self contain for rent in Abuja</li>
          <li>Flats for rent in Lagos</li>
          <li>Houses for rent in Lagos</li>
          <li>Houses for sale in Lagos</li>
          <li>Land for sale in Lagos</li>
          <li>Mini Flats for rent in Lagos</li>
          <li>Self contain for rent in Lagos</li>
        </ul>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import TfnWhiteLogo from 'src/components/svg/tfn-white-logo.vue'
import DownCaret from 'src/components/svg/down-caret.vue'
import RealEstateAgent from 'src/components/svg/real-estate-agent.vue'
import AddHome from 'src/components/svg/add-home.vue'
import PropertyTag from 'src/components/svg/property-tag.vue'
import SignInSolid from 'src/components/svg/sign-in-solid.vue'
import LoginBold from 'src/components/svg/login-bold.vue'
import QuestionFilled from 'src/components/svg/question-filled.vue'
import UpCaret from 'src/components/svg/up-caret.vue'
import instagramIcon from 'src/components/svg/instagram-icon.vue'
import facebookIcon from 'src/components/svg/facebook-icon.vue'
import youtubeIcon from 'src/components/svg/youtube-icon.vue'
import linkedInIcon from 'src/components/svg/linkedIn-icon.vue'
import { ref, watch } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

watch(
  () => leftDrawerOpen.value,
  (n) => {
    console.log(n)
    document.querySelector('body').classList.toggle('overflow')
  },
)
const navList = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Agent Finder',
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: 'Agent',
        img: RealEstateAgent,
        to: '/agent',
      },
      {
        label: 'Home Improvement',
        img: AddHome,
        to: '/home-improvement',
      },
      {
        label: 'Property Manager',
        img: PropertyTag,
        to: '/property-manager',
      },
    ],
  },
  {
    label: 'Calender',
    to: '/calender',
  },
  {
    label: 'Buy a Property',
    to: '/buy-property',
  },
  {
    label: 'Rent a Property',
    to: '/sell-property',
  },
  {
    label: 'Profile',
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: 'Sign In',
        img: SignInSolid,
        to: '/login',
      },
      {
        label: 'Sign Up',
        img: LoginBold,
        to: '/signup',
      },
    ],
  },
  {
    label: 'Contact Us',
    dropdown: true,
    mobileDropdown: false,
    list: [
      {
        label: '+2348029992888, +2348034934952',
        img: QuestionFilled,
      },
      {
        label: 'tfnowandassociates@gmail.com',
        img: QuestionFilled,
      },
      {
        label: '15, Ben Bright Street, Green Field Estste, Okota, Isolo, Lagos',
        img: QuestionFilled,
      },
    ],
  },
  {
    label: 'FAQs',
    to: '/faqs',
  },
  {
    label: 'TFN Yearly Report',
    to: '/yearly-report',
  },
])

const toggleMobileDropdown = (index) => {
  navList.value[index].mobileDropdown = !navList.value[index].mobileDropdown
}
</script>

<style lang="scss" scoped>
@import url(./MainLayout.scss);
</style>
