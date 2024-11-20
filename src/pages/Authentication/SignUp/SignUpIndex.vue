<template>
  <section class="signup-section">
    <nav class="signup-topbar">
      <h1>Sign Up</h1>
    </nav>
    <main class="signup-main">
      <div class="signup-details">
        <div class="signup-details-header">
          <h1>Create your own account</h1>
        </div>
        <div class="signup-details-body">
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
            :options="[
              'By registering you accept our Terms of Use and Privacy and agree that we and our selected partners may contact you with relevant offers and services',
            ]"
            v-model="tAndC"
          />
          <AppButton
            label="Sign Up"
            theme="primary"
            @click="signUp"
            :disabled="isSignUpFormComplete || tAndC === false"
          >
            <template #right-icon>
              <NavigateNext :width="34" :height="36" />
            </template>
          </AppButton>
        </div>
        <div class="signup-details-footer">
          <p>
            Do you already have an account?
            <RouterLink to="/login" class="login-link">Login</RouterLink>
          </p>
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
import EmailRounded from "src/components/svg/email-rounded.vue";
import RoundPhone from "src/components/svg/round-phone.vue";
import LockFill from "src/components/svg/lock-fill.vue";
import { convertToObject } from "src/helpers";
import AppButton from "src/components/ui/AppButton.vue";
import NavigateNext from "src/components/svg/navigate-next.vue";
import { isFormComplete } from "src/helpers";
import { RouterLink } from "vue-router";

const formValue = ref([
  {
    label: "Name",
    placeholder: "Enter name",
    tag: "name",
    value: null,
    img: Contact,
  },
  {
    label: "Username",
    placeholder: "Enter username",
    tag: "username",
    value: null,
    img: Contact,
  },
  {
    label: "Email",
    placeholder: "Enter email",
    tag: "email",
    value: null,
    img: EmailRounded,
  },
  {
    label: "Phone Number",
    placeholder: "Enter phone number",
    tag: "phoneNumber",
    value: null,
    img: RoundPhone,
  },
  {
    label: "Password",
    placeholder: "Enter password",
    tag: "password",
    type: "password",
    value: null,
    img: LockFill,
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm password",
    tag: "confirmPassword",
    type: "password",
    value: null,
    img: LockFill,
  },
  {
    label: "Account Type",
    tag: "accountType",
    type: "radio",
    options: [
      "Individual",
      "Property Manager",
      "Home Improvement",
      "Agent/Landlord",
    ],
    value: null,
  },
]);

const tAndC = ref(false);
const isSignUpFormComplete = computed(() =>
  isFormComplete(convertToObject(formValue.value)),
);

function signUp() {
  const payload = convertToObject(formValue.value);
  console.log(payload);
}
</script>

<style scoped lang="scss">
@import url("./SignUpIndex.scss");
</style>
