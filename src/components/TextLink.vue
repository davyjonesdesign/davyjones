<template>
      <router-link class="text-link" v-if="to" :to="to">
          <component v-if="showIcon" :is="icon" class="icon"></component>
        <div class="link-text">{{ text }}</div>
      </router-link>
      <a class="text-link" v-else :href="url" target="_blank">
          <component v-if="showIcon" :is="icon" class="icon"></component>
        <div class="link-text">{{ text }}</div>
      </a>
  </template>
  
  <script>
  export default {
    props: {
      url: String,
      to: String,      // Router link to
      text: String,
      showIcon: Boolean,
      icon: String,    // Icon component name (e.g., "DownloadIcon")
    },
  };
  </script>