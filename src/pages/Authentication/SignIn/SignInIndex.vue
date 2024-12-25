<template>
  <section class="signin-section">
    <nav class="signin-topbar">
      <RouterLink to="/" class="backarrow-button">
        <arrowBack />
      </RouterLink>
      <h3>Sign In</h3>
      <div></div>
    </nav>
    <main class="signin-main">
      <div class="signin-details">
        <div class="signin-details-header">
          <h3>Sign in to your account</h3>
        </div>
        <div class="signin-details-body">
          <div class="form" v-for="form in formValue" :key="form.tag">
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
            </div>
          </div>
          <q-checkbox label="Keep me Signed In" v-model="keepMeSignedIn" :color="colours.wine" />
          <q-btn label="Sign In" class="app-button primary mt-2" :disable="isSignFormCompleted">
            <div class="right-icon">
              <navigateNext :width="34" :height="36" />
            </div>
          </q-btn>
        </div>
        <div class="signin-details-footer">
          <span>
            Lost your password?
            <RouterLink to="/forgotpassword" class="login-link">Click here to Recover</RouterLink>
          </span>
          <span>
            Don't have an account?
            <RouterLink to="/signup" class="login-link">Sign Up now!</RouterLink>
          </span>
        </div>
      </div>
      <div class="serviceAuth">
        <div class="serviceAuth-header">
          <div class="line"></div>
          <span>or sign up with</span>
          <div class="line"></div>
        </div>
        <div class="serviceAuth-list">
          <q-btn class="app-button" padding="0.8rem">
            <googleIcon />
            <span class="ml-2">Google</span>
          </q-btn>
          <q-btn class="app-button" padding="0.8rem">
            <appleIcon />
            <span class="ml-2">Apple</span>
          </q-btn>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import contactIcon from 'src/components/svg/contact-icon.vue'
import lockFill from 'src/components/svg/lock-fill.vue'
import navigateNext from 'src/components/svg/navigate-next.vue'
import appleIcon from 'src/components/svg/apple-icon.vue'
import googleIcon from 'src/components/svg/google-icon.vue'
import arrowBack from 'src/components/svg/arrow-back.vue'
import { colours } from 'src/helpers/stylesheet'
import { computed, ref } from 'vue'
import { convertToObject, isFormComplete } from 'src/helpers'

const formValue = ref([
  {
    label: 'Email or Username',
    placeholder: 'Email or Username',
    tag: 'email',
    value: null,
    img: contactIcon,
  },
  {
    label: 'Password',
    placeholder: 'password',
    tag: 'password',
    type: 'password',
    value: null,
    img: lockFill,
    prev: 'password',
  },
])

const keepMeSignedIn = ref(false)
const isSignFormCompleted = computed(() => isFormComplete(convertToObject(formValue.value)))
</script>

<style scoped lang="scss">
@import url('./SignInIndex.scss');
</style>
