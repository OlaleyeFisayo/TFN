<template>
  <q-dialog :persistent="persistent" v-model="open">
    <q-card class="dialog-card">
      <q-card-section>
        <div class="card-section">
          <div class="card-title">
            <h6 class="title">{{ title }}</h6>
            <q-btn
              class="close-btn"
              dense
              icon="close"
              aria-label="Close Menu"
              flat
              @click="closeForm"
            />
          </div>
          <div class="form-fields">
            <form @submit.prevent.stop="handleAction" class="modal-form">
              <slot name="body" />
            </form>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  showPreviousText: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['onSubmit', 'close'])
const open = ref(props.visible)

const handleAction = () => {
  emit('onSubmit')
  emit('close')
}

function closeForm() {
  emit('close')
}

watch(
  () => props.visible,
  (newValue) => {
    open.value = newValue
  },
)
</script>

<style scoped lang="scss">
.dialog-card {
  max-width: 336px;
  width: 100%;
  padding: 0;
}

.card-section {
  margin: 0 !important;
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--grey2);
    padding: 1rem;
    h6 {
      color: var(--grey4);
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .form-fields {
    background: var(-white);
    padding: 1rem;
  }
}

.q-card__section--vert {
  padding: 0 !important;
}
</style>
