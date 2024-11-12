<template>
  <section class="signup-section">
    <nav class="signup-topbar">
      <button class="backarrow-button">
        <arrowBack />
      </button>
      <h1>Sign Up</h1>
      <div></div>
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
          <AppRadio />
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import arrowBack from "components/svg/arrow-back.vue";
import AppInput from "components/ui/AppInput.vue";
import { ref } from "vue";
import Contact from "components/svg/contact.vue";
import EmailRounded from "components/svg/email-rounded.vue";
import RoundPhone from "components/svg/round-phone.vue";
import LockFill from "components/svg/lock-fill.vue";

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
</script>

<style scoped lang="scss">
@import url("./SignUpIndex.scss");
</style>
