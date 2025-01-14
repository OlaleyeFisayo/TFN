<template>
  <AppNavbar title="Post a Request" />
  <section class="signin-section">
    <main class="signin-main">
      <div class="signin-details">
        <div class="signin-details-header">
          <h3>Request Details</h3>
        </div>
        <div class="signin-details-body">
          <div class="form" v-for="form in formValue" :key="form.tag">
            <div class="item">
              <p class="label">{{ form.label }}</p>
              <template v-if="form.type == 'select'">
                <q-select
                  v-model="form.value"
                  :options="form.options"
                  outlined
                  :color="colours.wine"
                  dense
                  :placeholder="form.placeholder"
                />
              </template>
              <template v-else>
                <q-input
                  dense
                  outlined
                  :placeholder="form.placeholder"
                  :color="colours.wine"
                  v-model="form.value"
                  :type="form.type"
                />
              </template>
            </div>
          </div>
          <q-btn
            label="Create Request"
            class="app-button primary mt-2"
            :disable="isRequestFormCompleted"
          >
            <div class="right-icon">
              <navigateNext :width="34" :height="36" />
            </div>
          </q-btn>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import navigateNext from 'src/components/svg/navigate-next.vue'
import { colours } from 'src/helpers/stylesheet'
import { computed, ref } from 'vue'
import { convertToObject, isFormComplete } from 'src/helpers'
import AppNavbar from 'src/components/ui/AppNavbar.vue'

const formValue = ref([
  {
    label: 'Category',
    placeholder: 'Select category',
    tag: 'category',
    value: 'For Rent',
    options: ['For Rent', 'For Buy'],
    type: 'select',
  },
  {
    label: 'Type',
    placeholder: 'Select Type',
    tag: 'type',
    type: 'select',
    value: 'Flat/Apartment',
    options: ['Flat/Apartment', 'House', 'Land', 'Commercial Property'],
  },
  {
    label: 'State',
    placeholder: 'Enter State',
    tag: 'state',
    value: null,
  },
  {
    label: 'Locality (optional)',
    placeholder: 'Enter Locality',
    tag: 'locality',
    value: null,
  },
  {
    label: 'Area (optional)',
    placeholder: 'Enter Area',
    tag: 'area',
    value: null,
  },
  {
    label: 'Bedrooms (optional)',
    placeholder: 'Select Bedrooms',
    tag: 'bedrooms',
    type: 'select',
    value: '1',
    options: ['1', '2', '3', '4', '5', '6+'],
  },
  {
    label: 'Budget',
    placeholder: 'Enter Budget',
    tag: 'budget',
    value: null,
  },
  {
    label: 'Comment',
    placeholder: 'Enter Comment',
    tag: 'comment',
    value: null,
    type: 'textarea',
  },
  {
    label: 'Name',
    placeholder: 'Enter Name',
    tag: 'name',
    value: null,
  },
  {
    label: 'Email',
    placeholder: 'Enter Email',
    tag: 'email',
    value: null,
  },
  {
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    tag: 'phone-number',
    value: null,
  },
])
const isRequestFormCompleted = computed(() => isFormComplete(convertToObject(formValue.value)))
</script>

<style scoped lang="scss">
@import url('./PostRequestIndex.scss');
</style>
