<template>
  <section class="forgotpassword-section">
    <nav class="forgotpassword-topbar">
      <button class="backarrow-button">
        <ArrowBack />
      </button>
      <h1>Reset Password</h1>
      <div></div>
    </nav>
    <main class="forgotpassword-main">
      <div class="forgotpassword-details" v-if="stage === 1">
        <div class="forgotpassword-details-header">
          <h1>Reset your Password</h1>
        </div>
        <div class="forgotpassword-details-body">
          <template v-for="form in stageOneformValue" :key="form.tag">
            <AppInput
              :label="form.label"
              :placeholder="form.placeholder"
              :tag="form.tag"
              :value="form.value"
              v-model="form.value"
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
          <div class="submit-button">
            <div></div>
            <AppButton
              label="Send"
              theme="primary"
              :disabled="isFirstStageCompleted"
              @click="submitStageOne"
            />
          </div>
        </div>
      </div>
      <div class="forgotpassword-details" v-else-if="stage === 2">
        <div class="forgotpassword-details-header">
          <h1>Set new Password</h1>
        </div>
        <div class="forgotpassword-details-body">
          <template v-for="form in stageTwoformValue" :key="form.tag">
            <AppInput
              :type="form.type"
              :label="form.label"
              :placeholder="form.placeholder"
              :tag="form.tag"
              :value="form.value"
              v-model="form.value"
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
          <div class="submit-button">
            <div></div>
            <AppButton
              label="Save"
              theme="primary"
              :disabled="isSecondStageCompleted"
              @click="submitStageTwo"
            >
              <template #right-icon>
                <Save :width="34" :height="36" />
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ArrowBack from "src/components/svg/arrow-back.vue";
import AppInput from "src/components/ui/AppInput.vue";
import Contact from "src/components/svg/contact.vue";
import AppButton from "src/components/ui/AppButton.vue";
import { convertToObject, isFormComplete } from "src/helpers";
import LockFill from "src/components/svg/lock-fill.vue";
import Save from "src/components/svg/save.vue";

const stageOneformValue = ref([
  {
    label: "Enter Email",
    placeholder: "email",
    tag: "email",
    value: null,
    img: Contact,
  },
]);
const stageTwoformValue = ref([
  {
    type: "password",
    label: "New Password",
    placeholder: "********",
    tag: "password",
    value: null,
    img: LockFill,
  },
  {
    type: "password",
    label: "Re-enter New Password",
    placeholder: "********",
    tag: "comfirmPassword",
    value: null,
    img: LockFill,
  },
]);

const stage = ref(1);
const isFirstStageCompleted = computed(() =>
  isFormComplete(convertToObject(stageOneformValue.value)),
);
const isSecondStageCompleted = computed(() =>
  isFormComplete(convertToObject(stageTwoformValue.value)),
);

function submitStageOne() {
  stage.value = 2;
}

function submitStageTwo() {}
</script>

<style scoped lang="scss">
@import url("./ForgotPasswordIndex.scss");
</style>
