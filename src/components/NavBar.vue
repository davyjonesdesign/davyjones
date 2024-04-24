<template>
    <nav class="navbar">
        <div class="navbarSkinny">
            <div class="brand">
                <LogoIcon />
                <h3>Davy Jones</h3>
            </div>
            <div class="navLinks">
                <router-link to="/">Home</router-link>
                <router-link to="/resume">Resume</router-link>
                <SocialLinks />
            </div>
        </div>
        <h4>
            Hi, I’m Davy Jones.<br>
            A Senior UI Designer at Wheels, with 8+ years' experience in graphic and web design, focusing on user-centric solutions and collaboration. MA graduate from MCAD, passionate about <strong>continual learning</strong> and <strong>experimental design</strong>.
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