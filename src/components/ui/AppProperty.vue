<template>
  <div class="app-property">
    <div class="top-side">
      <div class="carousel-date-added">
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          class="carousel"
        >
          <q-carousel-slide :name="1" :img-src="propertImg1" />
          <q-carousel-slide :name="2" :img-src="propertImg2" />
          <q-carousel-slide :name="3" :img-src="propertImg3" />
          <q-carousel-slide :name="4" :img-src="propertImg4" />
          <q-carousel-slide :name="5" :img-src="propertImg5" />
          <q-carousel-slide :name="6" :img-src="propertImg6" />
          <q-carousel-slide :name="7" :img-src="propertImg7" />
          <q-carousel-slide :name="8" :img-src="propertImg8" />
        </q-carousel>
        <div class="date-added">
          <Calendar color="#00ff0a" :width="20" />
          Added Yesterday
        </div>
      </div>
      <div class="property-details">
        <p class="detail">3 bedroom terraced Duplex</p>
        <p class="location mt-2">
          <LocationIcon color="black" />
          utako, F.C.T, Nigeria
        </p>
        <div class="price mt-2">
          <p class="price-naira">₦40,000,000</p>
          <p class="payment-period">Per annum</p>
        </div>
      </div>
    </div>
    <div class="bottom-side">
      <div class="item">
        <SleepingBed :width="28.5" :height="30" />
        <p>3 bedrooms</p>
      </div>
      <div class="item">
        <BathroomIcon :width="28.5" :height="30" />
        <p>3 bathrooms</p>
      </div>
      <div class="item">
        <ToiletIcon :width="23" :height="30" />
        <p>4 toilet</p>
      </div>
      <div class="item save">
        <FavouriteIcon :width="28" :height="30" />
        <p>Save</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BathroomIcon from '../svg/bathroom-icon.vue'
import FavouriteIcon from '../svg/favourite-icon.vue'
import SleepingBed from '../svg/sleeping-bed.vue'
import ToiletIcon from '../svg/toilet-icon.vue'
import propertImg1 from 'assets/image/property-1.jpeg'
import propertImg2 from 'assets/image/property-2.jpeg'
import propertImg3 from 'assets/image/property-3.jpeg'
import propertImg4 from 'assets/image/property-4.jpeg'
import propertImg5 from 'assets/image/property-5.jpeg'
import propertImg6 from 'assets/image/property-6.jpeg'
import propertImg7 from 'assets/image/property-7.jpeg'
import propertImg8 from 'assets/image/property-8.jpeg'
import LocationIcon from '../svg/location-icon.vue'
import { Calendar } from 'lucide-vue-next'

const slide = ref(1)
const autoplay = ref(false)
</script>

<style scoped lang="scss">
.app-property {
  width: 100%;
  .top-side {
    border-top: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    border-left: 1px solid var(--grey);
    padding: 1rem;

    .carousel-date-added {
      max-width: 700px;
      width: 100%;
      height: 232px;
      position: relative;

      .carousel {
        width: 100%;
        height: 100%;
      }

      .date-added {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba($color: #161515, $alpha: 0.9);
        display: flex;
        align-items: center;
        color: var(--green);
        padding: 0.5rem;
        gap: 0.3rem;
      }
    }

    .property-details {
      padding-top: 1rem;

      .detail {
        color: var(--wine);
      }

      .location {
        display: flex;
        align-items: center;
      }

      .price {
        display: flex;
        gap: 0.3rem;
        align-items: center;
        .price-naira {
          font-weight: 700;
          font-size: 1.4rem;
        }
      }
    }
  }

  .bottom-side {
    background: var(--wine);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      // width: 100%;

      &:not(:last-of-type) {
        border-right: 1px solid var(--grey);
      }

      p {
        color: var(--white);
        font-size: 0.8rem;
        text-align: center;
        text-transform: capitalize;

        @media (max-width: 400px) {
          font-size: 0.65rem;
        }
      }
    }

    .save {
      cursor: pointer;
    }
  }
}
</style>
