<template>
  <div>
    <header class="header">
      <div class="header-nav">
        <router-link to="/home" class="logo">
          <TfnWhiteLogo :width="32" :height="30" />
        </router-link>
        <q-toolbar-title class="company-name"> {{ title }} </q-toolbar-title>
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
          <q-btn
            class="close-btn"
            @click="toggleLeftDrawer"
            dense
            icon="close"
            size="lg"
            aria-label="Close Menu"
            flat
            round
          />
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
          <template v-if="userLoading">
            <template v-for="i in 10" :key="i">
              <q-skeleton class="mb-2" />
            </template>
          </template>
          <template v-else v-for="(nav, index) in navList" :key="index">
            <li
              v-if="
                Object.values(USERTYPES).includes(user?.accountType)
                  ? nav.for.includes(user?.accountType)
                  : nav.for.includes(USERTYPES.NO_TYPE)
              "
            >
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
          </template>
        </ul>
      </div>
      <div class="darkside" @click="toggleLeftDrawer"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, shallowRef, watch } from 'vue'
import TfnWhiteLogo from '../svg/tfn-white-logo.vue'
import { USERTYPES } from 'src/helpers/types'
import QuestionFilled from '../svg/question-filled.vue'
import LoginBold from '../svg/login-bold.vue'
import SignInSolid from '../svg/sign-in-solid.vue'
import SolidEye from '../svg/solid-eye.vue'
import UpgradeIcon from '../svg/upgrade-icon.vue'
import CardIcon from '../svg/card-icon.vue'
import AnnouncementSolid from '../svg/announcement-solid.vue'
import AddSolid from '../svg/add-solid.vue'
import PropertyTag from '../svg/property-tag.vue'
import AddHome from '../svg/add-home.vue'
import RealEstateAgent from '../svg/real-estate-agent.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/services/user'
import { useAuthStore } from 'src/stores/services/auth'
import DownCaret from '../svg/down-caret.vue'
import UpCaret from '../svg/up-caret.vue'

defineProps({
  title: String,
})
const { getAuthToken } = useAuthStore()
const { getUserDetails } = useUserStore()
const { user, loading: userLoading } = storeToRefs(useUserStore())

const leftDrawerOpen = ref(false)
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
const navList = shallowRef([
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
    label: 'Alerts',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'Property Seekers Request',
        img: QuestionFilled,
        to: '/property-seekers-request',
      },
      {
        label: 'My Property',
        img: QuestionFilled,
        to: '/my-property',
      },
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
    label: 'Listings',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'Add Property',
        img: AddSolid,
        to: '/add-property',
      },
      {
        label: 'My Listings',
        img: QuestionFilled,
        to: '/my-listings',
      },
      {
        label: 'Listings Statistics',
        img: QuestionFilled,
        to: '/listings-statistics',
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
    label: 'Saved & Requested',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'My Saved Property',
        img: QuestionFilled,
        to: '/my-saved-property',
      },
      {
        label: 'My Property Request',
        img: AnnouncementSolid,
        to: '/my-property-request',
      },
    ],
  },
  {
    label: 'Subscriptions',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'My Subscriptions',
        img: CardIcon,
        to: '/subscriptions',
      },
      {
        label: 'Upgrade Account',
        img: UpgradeIcon,
        to: '/upgrade account',
      },
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
    to: '/rent-property',
    for: [
      USERTYPES.INDIVIDUAL,
      USERTYPES.PROPERTY_MANAGER,
      USERTYPES.AGENT_LANDLORD,
      USERTYPES.HOME_IMPROVEMENT,
      USERTYPES.NO_TYPE,
    ],
  },
  {
    label: 'Sell a Property',
    to: '/sell-property',
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
  },
  {
    label: 'Property Request',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.INDIVIDUAL, USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'Post Request',
        img: QuestionFilled,
        to: '/post-request',
      },
      {
        label: 'View Requests',
        img: SolidEye,
        to: '/post-request',
      },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    for: [USERTYPES.PROPERTY_MANAGER],
  },
  {
    label: 'Account Management',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.INDIVIDUAL, USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'View Profile',
        img: QuestionFilled,
        to: '/profile',
      },
    ],
  },
  {
    label: 'Documents',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.AGENT_LANDLORD, USERTYPES.PROPERTY_MANAGER],
    list: [
      {
        label: 'My Documents',
        img: QuestionFilled,
        to: '/documents',
      },
      {
        label: 'Tenancy Agreement',
        img: QuestionFilled,
        to: '/tenancy-agreement',
      },
    ],
  },
  {
    label: 'Profile',
    dropdown: true,
    mobileDropdown: false,
    for: [USERTYPES.NO_TYPE],
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
  navList.value = navList.value.map((item, i) =>
    i === index ? { ...item, mobileDropdown: !item.mobileDropdown } : item,
  )
}

onMounted(async () => {
  if (getAuthToken) {
    await getUserDetails()
  }
})
</script>

<style lang="scss" scoped>
.header {
  background: var(--wine);
  padding: 0.5rem 2rem !important;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-content: center;
  max-width: 1440px !important;
  width: 100%;
  margin: 0 auto;

  .company-name {
    text-align: center;
    color: var(--white);
  }
}

.mobile-nav-list {
  position: fixed;
  width: 100%;
  height: 100dvh;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;
  z-index: 5;
  transform: translateX(-100%);
  transition: 200ms ease-in-out;

  @media (max-width: 650px) {
    grid-template-columns: 100%;
  }

  &.show {
    transform: translateX(0);
  }

  .sidebar-content {
    background-color: var(--white);
    padding: 2rem 1.5rem;
    overflow-y: scroll;

    .action {
      display: flex;
      justify-content: right;
    }

    .logo-and-name {
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .logo-container {
        width: 190px;
        height: 150px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .nav-list {
      margin-top: 1rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .title {
        color: var(--black);
      }

      .toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 !important;
        margin: 0 !important;

        .toggle-button {
          background: inherit;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .child {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding-left: 1rem;
        gap: 0.3rem;
        margin-top: 0.3rem;

        .title {
          display: flex;
          align-items: center;
          gap: 0.3rem;

          span {
            width: fit-content;
          }
        }
      }
    }
  }

  .darkside {
    background-color: rgba(0, 0, 0, 0.2);

    @media (max-width: 650px) {
      display: none;
    }
  }
}
</style>
