<template>
    <nav class="navbar">
        <router-link class="navbarSkinny" to="/">
            <div class="brand">
                <LogoIcon />
                <h3>Davy Jones</h3>
            </div>
            <div class="navLinks">
                <router-link to="/">Projects</router-link>
                <router-link to="/resume">Resume</router-link>
                <SocialLinks />
            </div>
        </router-link>
        <h4>
            Hi, I’m Davy Jones.<br><br>
            I am senior UI designer, an expert in Design Systems, High-Fidelity Prototyping, and User-Centered Solutions.
        </h4>
    </nav>
</template>
<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import SocialLinks from '@/components/SocialLinks.vue'
export default {
  components: {
    LogoIcon,
    SocialLinks
  },
  
}
</script>