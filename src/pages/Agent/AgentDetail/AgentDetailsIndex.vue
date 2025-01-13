<template>
  <section class="agent-details-section">
    <section class="agent-detail">
      <div class="section">
        <div class="agent-img">
          <img src="assets/image/user-avatar.webp" alt="User image" loading="lazy" />
        </div>
        <div class="agent-details">
          <p class="agent-name mt-4">Abuja LandLady</p>
          <p class="agent-website mt-2">Abjidy.tfnproperties.com</p>
          <div class="reviews mt-2">
            <StarIcon v-for="i in 5" :key="i" color="#FFA800" />
            <p>5.0 . 29 Reviews</p>
          </div>
          <p class="agent-address mt-2">
            Suite A10a, Plaza Wuse Zone 6 Abuja, Abuja, F.C.T, Nigeria.
          </p>
          <div class="buttons mt-2">
            <q-btn class="app-button phone-btn" color="white" :text-color="colours.black">
              <div class="space-button">
                <PhoneCall />
                <span>+234 812 346 1223</span>
              </div>
            </q-btn>
            <q-btn class="app-button phone-btn" color="white" :text-color="colours.black">
              <div class="space-button">
                <WhatsappIcon />
                <span>+234 812 346 1223</span>
              </div>
            </q-btn>
          </div>
          <q-btn class="app-button primary mt-2" label="Email Agent" />

          <div class="report-agent-container">
            <q-btn
              label="Report Agent"
              class="report-agent mt-2"
              no-caps
              flat
              @click="toggleReportAgentModal"
            />
          </div>
          <div class="mt-2 agent-members" v-if="showAgentMembers">
            <AppAgentMember />
            <AppAgentMember />
            <AppAgentMember />
            <AppAgentMember />
          </div>
          <div class="report-agent-container mt-2">
            <q-btn no-caps color="white" :text-color="colours.wine" @click="toggleAgentMembers">
              <div class="space-button">
                <span>Our Members</span>
                <DownCaret color="#7e1416" />
              </div>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="black-background"></div>
    </section>
    <section class="more-agent-detail mt-4">
      <div class="section">
        <div class="about-agent">
          <h4 class="agent-header mb-3">About</h4>
          <div class="agent-info">
            <p>
              Our area of focus is the Real Estate business which has existed from time immemorial.
              Overtime, the Business has grown into amass of wealth across nations with evolving
              business models. For instance, in sub-sahara Africa, the Real Estate business is fast
              developing and becoming the main stream of income to many.
            </p>
            <p>
              The Real Estate business with its innumerable opportunities leaves an assurance of
              wealth, in as much as human must always NEED a shelter to reside.
            </p>
            <p>
              As it continues to develop in Africa, we deem it wise to tap into this wealth by
              easing the burden of rent payments as well as property management via our web and
              mobile application.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="agent-listing">
      <div class="section">
        <p class="agent-listing-results">Results 1 - 5 of 5</p>
        <div class="line mt-2 mb-2"></div>
        <q-select
          :options="['All', 'Sale', 'Sold', 'Rent']"
          outlined
          :color="colours.wine"
          dense
          v-model="agentListingFilter"
          class="app-select"
        />
      </div>
    </section>
    <section class="agent-property">
      <div class="section">
        <AppGrid2>
          <AppProperty />
          <AppProperty />
          <AppProperty />
          <AppProperty />
        </AppGrid2>
      </div>
    </section>
    <section class="agent-property-pagination">
      <div class="section">
        <q-pagination
          v-model="agentListingPagination"
          :color="colours.grey"
          :max="10"
          :max-pages="4"
          :boundary-numbers="false"
          :text-color="colours.white"
          direction-links
          unelevated
          :active-color="colours.wine"
        />
      </div>
    </section>
    <section class="agent-ratings">
      <div class="section">
        <h5 class="header">Ratings & Reviews (54)</h5>
        <div class="flex-container">
          <div>
            <q-input
              v-model="agentRating"
              outlined
              type="textarea"
              :color="colours.wine"
              placeholder="Write a review"
              class="mt-3"
            />
          </div>
          <div>
            <p class="mt-3 review">How likely are you to recommend Home?</p>
            <AppStars color="#7e1416" class="mt-1" />
            <div class="other-traits">
              <p>Local Knowledge</p>
              <AppStars color="#7e1416" />
            </div>
            <div class="other-traits">
              <p>Process Expertise</p>
              <AppStars color="#7e1416" />
            </div>
            <div class="other-traits">
              <p>Responsiveness</p>
              <AppStars color="#7e1416" />
            </div>
            <div class="other-traits">
              <p>Negotiation Skills</p>
              <AppStars color="#7e1416" />
            </div>
            <q-btn
              class="mt-2"
              label="Send Review"
              :color="colours.wine"
              no-caps
              padding="0.5rem 5rem"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="review-filter">
      <div class="section">
        <div class="filterOption mb-3">
          <p class="label">Filter by</p>
          <q-select
            :options="['All Reviews']"
            outlined
            :color="colours.wine"
            dense
            v-model="reviewFilter"
            class="app-select"
          />
        </div>
        <div class="filterOption mb-3">
          <p class="label">Sort by</p>
          <q-select
            :options="['Newest first']"
            outlined
            :color="colours.wine"
            dense
            v-model="reviewSort"
            class="app-select"
          />
        </div>
      </div>
    </section>
    <section class="review">
      <div class="section">
        <AppReview />
        <AppReview />
        <AppReview />
        <AppReview />
      </div>
    </section>
    <section class="agent-property-pagination">
      <div class="section">
        <q-pagination
          v-model="agentListingPagination"
          :color="colours.grey"
          :max="10"
          :max-pages="4"
          :boundary-numbers="false"
          :text-color="colours.white"
          direction-links
          unelevated
          :active-color="colours.wine"
        />
      </div>
    </section>
    <section class="service-area">
      <div class="section">
        <h5 class="title">Service areas</h5>
        <h6>Lagos, Nigeria</h6>
      </div>
    </section>
  </section>
  <AppModal
    title="Report Agent"
    :persistent="true"
    :visible="showReportAgentModal"
    @close="toggleReportAgentModal"
  >
    <template #body>
      <div class="form">
        <div class="item">
          <p class="label">Reason</p>
          <q-select
            :options="[
              'Select Reason',
              'Offensive content or picture',
              'Fraudulent Listing',
              'Difference from actual property',
              'Duplicate Listing',
              'Other',
            ]"
            outlined
            :color="colours.wine"
            dense
            v-model="reportAgentForm.reason"
          />
        </div>
        <div class="item">
          <p class="label">Name</p>
          <q-input
            dense
            outlined
            placeholder="Enter Name"
            v-model="reportAgentForm.name"
            :color="colours.wine"
          >
            <template #append>
              <ContactIcon :width="37" :height="24" color="black" />
            </template>
          </q-input>
        </div>
        <div class="item">
          <p class="label">Email</p>
          <q-input
            dense
            outlined
            placeholder="Enter email"
            v-model="reportAgentForm.email"
            :color="colours.wine"
          >
            <template #append>
              <EmailRounded :width="37" :height="24" color="black" />
            </template>
          </q-input>
        </div>
        <div class="item">
          <p class="label">Comment</p>
          <q-input
            dense
            outlined
            v-model="reportAgentForm.comment"
            :color="colours.wine"
            type="textarea"
          />
        </div>
        <q-btn
          class="app-button primary"
          label="Report Agent"
          no-caps
          :disable="isReportAgentFormComplete"
        >
          <div class="right-icon">
            <NavigateNextCaret :width="34" :height="36" />
          </div>
        </q-btn>
      </div>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import ContactIcon from 'src/components/svg/contact-icon.vue'
import DownCaret from 'src/components/svg/down-caret.vue'
import EmailRounded from 'src/components/svg/email-rounded.vue'
import NavigateNextCaret from 'src/components/svg/navigate-next-caret.vue'
import PhoneCall from 'src/components/svg/phone-call.vue'
import StarIcon from 'src/components/svg/star-icon.vue'
import WhatsappIcon from 'src/components/svg/whatsapp-icon.vue'
import AppAgentMember from 'src/components/ui/AppAgentMember.vue'
import AppGrid2 from 'src/components/ui/AppGrid2.vue'
import AppModal from 'src/components/ui/AppModal.vue'
import AppProperty from 'src/components/ui/AppProperty.vue'
import AppReview from 'src/components/ui/AppReview.vue'
import AppStars from 'src/components/ui/AppStars.vue'
import { isFormComplete } from 'src/helpers'
import { colours } from 'src/helpers/stylesheet'
import { computed, reactive, ref } from 'vue'

const showReportAgentModal = ref(false)
const reportAgentForm = reactive({
  reason: 'Select Reason',
  name: '',
  email: '',
  comment: '',
})
const toggleReportAgentModal = () => {
  showReportAgentModal.value = !showReportAgentModal.value
  if (!showReportAgentModal.value) {
    reportAgentForm.comment = ''
    reportAgentForm.email = ''
    reportAgentForm.name = ''
    reportAgentForm.reason = 'Select Reason'
  }
}
const isReportAgentFormComplete = computed(() => isFormComplete(reportAgentForm))

const agentListingFilter = ref('All')

const showAgentMembers = ref(false)
const toggleAgentMembers = () => {
  showAgentMembers.value = !showAgentMembers.value
}

const agentListingPagination = ref(1)

const agentRating = ref('')

const reviewFilter = ref('All Reviews')
const reviewSort = ref('Newest first')
</script>

<style scoped lang="scss">
@import url('./AgentDetailsIndex.scss');
</style>
