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
            <q-btn no-caps color="white" :text-color="colours.wine">
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
import WhatsappIcon from 'src/components/svg/whatsapp-icon.vue'
import AppModal from 'src/components/ui/AppModal.vue'
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
</script>

<style scoped lang="scss">
@import url('./AgentDetailsIndex.scss');
</style>
