<template>
  <div>
    <footer class="top-footer">
      <div class="footer-content">
        <div class="logo">
          <TfnWhiteLogo :width="30" :height="30" />
          <h5>
            TFN <br />
            Properties
          </h5>
        </div>
        <ul class="footer-link">
          <h5>Useful Links:</h5>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><RouterLink to="/policy">Privacy Policy</RouterLink></li>
          <li><RouterLink to="/termsofuse">Terms of Use</RouterLink></li>
          <li><RouterLink to="/faqs">FAQs</RouterLink></li>
        </ul>
        <div class="socials">
          <FacebookIcon size="30" />
          <InstagramIcon size="30" />
          <YoutubeIcon />
          <LinkedInIcon />
        </div>
      </div>
    </footer>
    <footer class="bottom-footer">
      <div class="footer-content">
        <h5>Popular Property</h5>
        <ul>
          <li>Flats for rent in Abuja</li>
          <li>Houses for rent in Abuja</li>
          <li>Houses for sale in Abuja</li>
          <li>Land for sale in Abuja</li>
          <li>Mini Flats for rent in Abuja</li>
          <li>Self contain for rent in Abuja</li>
          <li>Flats for rent in Lagos</li>
          <li>Houses for rent in Lagos</li>
          <li>Houses for sale in Lagos</li>
          <li>Land for sale in Lagos</li>
          <li>Mini Flats for rent in Lagos</li>
          <li>Self contain for rent in Lagos</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { FacebookIcon, InstagramIcon } from 'lucide-vue-next'
import TfnWhiteLogo from '../svg/tfn-white-logo.vue'
import LinkedInIcon from '../svg/linkedIn-icon.vue'
import YoutubeIcon from '../svg/youtube-icon.vue'
</script>

<style lang="scss" scoped>
.top-footer {
  background: var(--wine);
  margin-top: 3rem;

  .footer-content {
    padding: 1.5rem;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    h4 {
      text-align: center;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .footer-link {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    text-align: center;
    gap: 1.3rem;
    color: var(--white);

    a {
      color: var(--white);
    }
  }

  .socials {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
  }
}

.bottom-footer {
  background: var(--black);

  .footer-content {
    padding: 1.5rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    h5 {
      text-align: center;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        text-align: center;
      }
    }
  }
}
</style>
