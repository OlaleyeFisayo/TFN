<template>
  <div class="app-review">
    <div class="from">
      <p class="info">4/3/2022 - fisayoOlaleye</p>
      <AppStars color="#7e1416" />
    </div>
    <p class="property-bought">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam cumque
      praesentium fugit? Placeat soluta aliquid veniam consequuntur perspiciatis ut. Sunt aperiam
      vitae dignissimos sit quos alias asperiores dolorum quaerat?
    </p>
    <p class="more-info mt-2" :style="styleSheet">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita architecto vel asperiores
      fugit neque. Sapiente odio, fugit quae consectetur eveniet eligendi perferendis assumenda
      omnis aliquid libero esse rerum, quibusdam qui. Illo dolorum, impedit aut, dolores atque eius
      omnis maiores, consequuntur earum porro distinctio perspiciatis saepe repudiandae. Aliquid,
      iure. Illum, illo amet ullam aliquam distinctio officia quam sapiente consequatur sit magni.
      Autem esse consequatur officia nam atque itaque porro, necessitatibus tempore architecto
      soluta eligendi laborum. Amet, quae? Blanditiis unde delectus sequi perferendis. Sequi
      numquam, doloribus sit consequuntur culpa cumque! Veniam, libero? Explicabo fugiat commodi
      ipsam omnis repudiandae iste, pariatur debitis consectetur ut autem obcaecati, quos, quidem
      sint temporibus corrupti. Assumenda omnis voluptate quos maxime esse ad rerum eveniet nisi
      quibusdam tenetur? Officia dicta at blanditiis aspernatur culpa fuga dolorum inventore debitis
      illo, eius, necessitatibus enim! Facilis veritatis deleniti iusto nostrum id, debitis
      similique asperiores quos in nam necessitatibus neque nisi ea!
    </p>
    <q-btn
      :text-color="colours.wine"
      :label="`Show ${toggleDisplay ? 'less -' : 'more +'}`"
      no-caps
      flat
      @click="toggleMoreInfo"
    />
  </div>
</template>

<script setup lang="ts">
import { colours } from 'src/helpers/stylesheet'
import AppStars from './AppStars.vue'
import { computed, ref } from 'vue'

const toggleDisplay = ref(false)
const styleSheet = computed(() => ({
  height: `${toggleDisplay.value ? 'auto' : '5rem'}`,
}))
const toggleMoreInfo = () => {
  toggleDisplay.value = !toggleDisplay.value
}
</script>

<style scoped lang="scss">
.app-review {
  width: 100%;
  border-bottom: 1px solid var(--black);
  padding: 1rem 0;
  .from {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .info {
      font-weight: 700;
    }
  }

  .more-info {
    font-size: 0.8rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.5rem;
  }
}
</style>
