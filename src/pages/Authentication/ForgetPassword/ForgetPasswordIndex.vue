<template>
  <section class="forgotpassword-section">
    <nav class="forgotpassword-topbar">
      <RouterLink to="/login" class="backarrow-button">
        <arrowBack />
      </RouterLink>
      <h3>Reset Password</h3>
      <div></div>
    </nav>
    <main class="forgotpassword-main">
      <div class="forgotpassword-details" v-if="stage === 1">
        <div class="forgotpassword-details-header">
          <h3>Reset your Password</h3>
        </div>
        <div class="forgotpassword-details-body">
          <div class="form" v-for="form in stageOneformValue" :key="form.tag">
            <div class="item">
              <p class="label">{{ form.label }}</p>
              <q-input
                dense
                outlined
                :placeholder="form.placeholder"
                :color="colours.wine"
                v-model="form.value"
                :type="form.type"
              >
                <template #append>
                  <component :is="form.img" :width="37" :height="24" color="black" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="submit-button">
            <div></div>
            <q-btn
              label="Send"
              class="app-button primary"
              :disable="isFirstStageCompleted"
              @click="submitStageOne"
            />
          </div>
        </div>
      </div>
      <div class="forgotpassword-details" v-else-if="stage === 2">
        <div class="forgotpassword-details-header">
          <h3>Set new Password</h3>
        </div>
        <div class="forgotpassword-details-body">
          <div class="form" v-for="form in stageTwoformValue" :key="form.tag">
            <div class="item">
              <p class="label">{{ form.label }}</p>
              <q-input
                dense
                outlined
                :placeholder="form.placeholder"
                :color="colours.wine"
                v-model="form.value"
                :type="form.type"
              >
                <template #append>
                  <template v-if="form.type === 'password'">
                    <q-icon
                      :name="'visibility_off'"
                      class="cursor-pointer mr-2"
                      @click="form.type = 'text'"
                    />
                  </template>
                  <template v-if="form.prev === 'password' && form.type === 'text'">
                    <q-icon
                      :name="'visibility'"
                      class="cursor-pointer mr-2"
                      @click="form.type = 'password'"
                    />
                  </template>
                  <component :is="form.img" :width="37" :height="24" color="black" />
                </template>
              </q-input>
              <template v-if="form.tag === 'confirmPassword'">
                <span class="error-message" v-if="form.value && !confirmPassword"
                  >Password doesn't match</span
                >
              </template>
            </div>
          </div>
          <div class="submit-button">
            <div></div>
            <q-btn
              class="app-button primary"
              label="Save"
              :disable="isSecondStageCompleted || !confirmPassword"
              @click="submitStageTwo"
            >
              <div class="right-icon">
                <saveIcon :width="34" :height="36" />
              </div>
            </q-btn>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import contactIcon from 'src/components/svg/contact-icon.vue'
import arrowBack from 'src/components/svg/arrow-back.vue'
import lockFill from 'src/components/svg/lock-fill.vue'
import saveIcon from 'src/components/svg/save-icon.vue'
import { convertToObject, isFormComplete } from 'src/helpers'
import { colours } from 'src/helpers/stylesheet'
import { isPasswordSame } from 'src/helpers'

const stageOneformValue = ref([
  {
    label: 'Enter Email',
    placeholder: 'Email',
    tag: 'email',
    value: null,
    img: contactIcon,
  },
])
const stageTwoformValue = ref([
  {
    type: 'password',
    label: 'New Password',
    placeholder: '********',
    tag: 'password',
    value: null,
    img: lockFill,
    prev: 'password',
  },
  {
    type: 'password',
    label: 'Re-enter New Password',
    placeholder: '********',
    tag: 'confirmPassword',
    value: null,
    img: lockFill,
    prev: 'password',
  },
])

const stage = ref(1)
const isFirstStageCompleted = computed(() =>
  isFormComplete(convertToObject(stageOneformValue.value)),
)
const isSecondStageCompleted = computed(() =>
  isFormComplete(convertToObject(stageTwoformValue.value)),
)
const confirmPassword = computed(() => isPasswordSame(stageTwoformValue.value))

function submitStageOne() {
  stage.value = 2
}

function submitStageTwo() {}
</script>

<style scoped lang="scss">
@import url('./ForgetPasswordIndex.scss');
</style>
