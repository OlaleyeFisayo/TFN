<template>
  <section class="signin-section">
    <nav class="signin-topbar">
      <RouterLink to="/" class="backarrow-button">
        <arrowBack />
      </RouterLink>
      <h1>Sign In</h1>
      <div></div>
    </nav>
    <main class="signin-main">
      <div class="signin-details">
        <div class="signin-details-header">
          <h1>Sign in to your account</h1>
        </div>
        <div class="signin-details-body">
          <template v-for="form in formValue" :key="form.tag">
            <AppInput
              :type="form.type"
              :label="form.label"
              :placeholder="form.placeholder"
              :tag="form.tag"
              :value="form.value"
              v-model="form.value"
              :options="form.options"
            >
              <template #right-icon>
                <component
                  :is="form.img"
                  :width="37"
                  :height="24"
                  color="black"
                />
              </template>
            </AppInput>
          </template>
          <AppInput
            type="checkbox"
            :options="['Keep me Signed In']"
            v-model="keepMeSignedIn"
          />
          <AppButton
            label="Sign In"
            theme="primary"
            @click="signUp"
            :disabled="isSignUpFormComplete"
            class="submit-button"
          >
            <template #right-icon>
              <NavigateNext :width="34" :height="36" />
            </template>
          </AppButton>
        </div>
        <div class="signin-details-footer">
          <p>
            Lost your password?
            <RouterLink to="/forgotpassword" class="login-link"
              >Click here to Recover</RouterLink
            >
          </p>
          <p>
            Don't have an account?
            <RouterLink to="/" class="login-link">Sign Up now!</RouterLink>
          </p>
        </div>
      </div>
      <div class="serviceAuth">
        <div class="serviceAuth-header">
          <div class="line"></div>
          <span>or sign up with</span>
          <div class="line"></div>
        </div>
        <div class="serviceAuth-list">
          <AppButton theme="serviceAuth">
            <div class="serviceAuthText">
              <Google />
              <p class="serviceAuthText">Google</p>
            </div>
          </AppButton>
          <AppButton theme="serviceAuth">
            <div class="serviceAuthText">
              <Apple />
              <p>Apple</p>
            </div>
          </AppButton>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import arrowBack from "src/components/svg/arrow-back.vue";
import AppInput from "src/components/ui/AppInput.vue";
import { computed, ref } from "vue";
import Contact from "src/components/svg/contact.vue";
import LockFill from "src/components/svg/lock-fill.vue";
import { convertToObject } from "src/helpers";
import AppButton from "src/components/ui/AppButton.vue";
import NavigateNext from "src/components/svg/navigate-next.vue";
import { isFormComplete } from "src/helpers";
import { RouterLink } from "vue-router";
import Google from "src/components/svg/google.vue";
import Apple from "src/components/svg/apple.vue";

const formValue = ref([
  {
    label: "Email or Username",
    placeholder: "email or username",
    tag: "email",
    value: null,
    img: Contact,
  },
  {
    label: "Password",
    placeholder: "password",
    tag: "password",
    type: "password",
    value: null,
    img: LockFill,
  },
]);

const keepMeSignedIn = ref(false);
const isSignUpFormComplete = computed(() =>
  isFormComplete(convertToObject(formValue.value)),
);

function signUp() {
  const payload = convertToObject(formValue.value);
  console.log(payload);
}
</script>

<style scoped lang="scss">
@import url("./SignInIndex.scss");
</style>
