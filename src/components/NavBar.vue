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
            A cheerful and detail-oriented Senior UI Designer in Chicago with a track record or 8 years crafting immersive interfaces. Skilled in <strong>driving user-centric solutions</strong> to elevate digital experiences. Passionate about <strong>pushing design boundaries</strong>.
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