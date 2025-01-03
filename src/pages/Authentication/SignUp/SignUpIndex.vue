<template>
  <section class="signup-section">
    <nav class="signup-topbar">
      <RouterLink to="/" class="backarrow-button">
        <arrowBack />
      </RouterLink>
      <h3>Sign Up</h3>
      <div></div>
    </nav>
    <main class="signup-main">
      <div class="signup-details">
        <div class="signup-details-header">
          <h3>Create your own account</h3>
        </div>
        <div class="signup-details-body">
          <div class="form" v-for="form in formValue" :key="form.tag">
            <div class="item">
              <p class="label">{{ form.label }}</p>
              <template v-if="form.type === 'radio'">
                <div v-for="(option, index) in form.options" :key="index">
                  <q-radio
                    dense
                    :val="option"
                    :label="option"
                    v-model="form.value"
                    :color="colours.wine"
                  />
                </div>
              </template>
              <template v-else>
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
              </template>
            </div>
          </div>
          <q-btn
            label="Sign up"
            class="app-button primary mt-2"
            :disable="isSignUpFormCompleted || !confirmPassword"
            @click="createAccount"
            :loading="authLoading"
          >
            <div class="right-icon">
              <navigateNext :width="34" :height="36" />
            </div>
          </q-btn>
          <p>
            By registering you accept our
            <RouterLink to="/termsofuse">Terms of Use</RouterLink> and
            <RouterLink to="/policy">Privacy</RouterLink> and agree that we and our selected
            partners may contact you with relevant offers and services
          </p>
        </div>
        <div class="signup-details-footer">
          <span>
            Already have an account
            <RouterLink to="/login" class="login-link">Click here to sign in</RouterLink>
          </span>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import contactIcon from 'src/components/svg/contact-icon.vue'
import emailRounded from 'src/components/svg/email-rounded.vue'
import lockFill from 'src/components/svg/lock-fill.vue'
import roundPhone from 'src/components/svg/round-phone.vue'
import arrowBack from 'src/components/svg/arrow-back.vue'
import { computed, ref } from 'vue'
import { colours } from 'src/helpers/stylesheet'
import navigateNext from 'src/components/svg/navigate-next.vue'
import { changeValueOfObject, isFormComplete, isPasswordSame, convertToObject } from 'src/helpers'
import { useAuthStore } from 'src/stores/services/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const formValue = ref([
  {
    label: 'Name',
    placeholder: 'Enter name',
    tag: 'name',
    value: null,
    img: contactIcon,
  },
  {
    label: 'Username',
    placeholder: 'Enter username',
    tag: 'username',
    value: null,
    img: contactIcon,
  },
  {
    label: 'Email',
    placeholder: 'Enter email',
    tag: 'email',
    value: null,
    img: emailRounded,
  },
  {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    tag: 'phoneNumber',
    value: null,
    img: roundPhone,
  },
  {
    label: 'Password',
    placeholder: 'Enter password',
    tag: 'password',
    type: 'password',
    value: null,
    img: lockFill,
    prev: 'password',
  },
  {
    label: 'Confirm Password',
    placeholder: 'Confirm password',
    tag: 'confirmPassword',
    type: 'password',
    value: null,
    img: lockFill,
    prev: 'password',
  },
  {
    label: 'Account Type',
    tag: 'accountType',
    type: 'radio',
    options: ['Individual', 'Property Manager', 'Home Improvement', 'Agent/Landlord'],
    value: null,
  },
])
const { success: authSuccess, loading: authLoading } = storeToRefs(useAuthStore())
const { signUp } = useAuthStore()
const isSignUpFormCompleted = computed(() => isFormComplete(convertToObject(formValue.value)))
const confirmPassword = computed(() => isPasswordSame(formValue.value))

const createAccount = async () => {
  const payload = convertToObject(formValue.value)
  payload.accountType = changeValueOfObject(payload.accountType)
  await signUp(payload)
  if (authSuccess) {
    router.push({
      path: '/login',
    })
  }
}
</script>

<style scoped lang="scss">
@import url('./SignUpIndex.scss');
</style>
