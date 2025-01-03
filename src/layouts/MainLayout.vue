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
                  <template v-if="list.to">
                    <RouterLink :to="list.to" class="title" @click="toggleLeftDrawer">
                      <component :is="list.img" color="black" :width="28" :height="28" />
                      <span>
                        {{ list.label }}
                      </span>
                    </RouterLink>
                  </template>
                  <template v-else>
                    <div class="title">
                      <component :is="list.img" color="black" :width="28" :height="28" />
                      <span> {{ list.label }}</span>
                    </div>
                  </template>
                </li>
              </ul>
            </template>
            <template v-else>
              <RouterLink class="title" :to="nav.to" @click="toggleLeftDrawer">{{
                nav.label
              }}</RouterLink>
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
// import { useAuthStore } from 'src/stores/services/auth'
// import { useUserStore } from 'src/stores/services/user'
import { USERTYPES } from 'src/helpers/types'

const leftDrawerOpen = ref(false)
// const { getAuthToken } = useAuthStore()
// const {getUserDetails, getUserAccountType} = useUserStore()
// const userType = computed(() => Object.values(USERTYPES).includes(getUserAccountType) ? getUserAccountType : USERTYPES.NO_TYPE)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

watch(
  () => leftDrawerOpen.value,
  (n) => {
    if (n) {
      document.querySelector('body').classList.add('overflow')
    } else {
      document.querySelector('body').classList.remove('overflow')
    }
  },
)
const navList = ref([
  {
    label: 'Home',
    to: '/',
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'Agent Finder',
    dropdown: true,
    mobileDropdown: false,
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
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
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'Buy a Property',
    to: '/buy-property',
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'Rent a Property',
    to: '/sell-property',
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'Profile',
    dropdown: true,
    mobileDropdown: false,
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
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
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
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
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'TFN Yearly Report',
    to: '/yearly-report',
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
])

const toggleMobileDropdown = (index) => {
  navList.value[index].mobileDropdown = !navList.value[index].mobileDropdown
}

// onMounted(async () => {
//   if (getAuthToken) {
//     await getUserDetails();
//     console.log(userType.value)
//   } else {
//     console.log(getAuthToken)
//   }
// })
</script>

<style lang="scss" scoped>
@import url(./MainLayout.scss);
</style>
