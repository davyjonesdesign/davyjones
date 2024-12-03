<template>
  <div class="password-page">
    <div class="password-card">
      <div class="pc-header">
        <div class="title">
          <h3>Davy Jones</h3>
          <p>UX/UI Designer Portfolio</p>
        </div>
        <LogoIcon />
      </div>

      <label>Password</label>
      <form @submit.prevent="checkPassword">
        <input type="password" v-model="passwordInput" required />
        <div class="error-text">
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import LogoIcon from "@/components/icons/LogoIcon.vue";
export default {
  data() {
    return {
      passwordInput: "",
      errorMessage: "",
    };
  },
  components: {
    LogoIcon,
  },
  methods: {
    checkPassword() {
      const correctPassword = "flibbertigibbet"; // Replace with your password
      if (this.passwordInput === correctPassword) {
        localStorage.setItem("isAuthenticated", "true");
        this.$router.push("/");
      } else {
        this.errorMessage = "Incorrect password. Please try again.";
      }
    },
  },
};
</script>

<style scoped>

</style>
