<template>
  <NavBar :class="{ 'shrink': isShrunk }"/>
  <div class="navLinks-mobile">
    <Slide right width="600" :closeOnNavigation="true" class="ham">
        <div class="mobile-links">
            <router-link to="/">Home</router-link>
          <router-link to="/resume">Resume</router-link>
        </div>
          <SocialLinks />
    </Slide>
  </div>
<router-view/>
  <GlobalFooter/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SocialLinks from "./components/SocialLinks.vue";
import GlobalFooter from "@/components/GlobalFoot.vue";
import { Slide } from 'vue3-burger-menu';


export default {
  components: {
    NavBar,
    SocialLinks,
    GlobalFooter,
    Slide
  },
  data() {
    return {
      isShrunk: false
    };
  },
  created() {
    window.addEventListener('scroll', this.debouncedHandleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.debouncedHandleScroll);
  },
  methods: {
    handleScroll() {
      // Adjust the scroll threshold as needed
      if (window.scrollY > 200) {
        this.isShrunk = true;
      } else {
        this.isShrunk = false;
      }
    },
    // Debounce the scroll event handler
    debouncedHandleScroll: debounce(function() {
      this.handleScroll();
    }, 40) // Adjust debounce delay as needed
  }
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
</script>
