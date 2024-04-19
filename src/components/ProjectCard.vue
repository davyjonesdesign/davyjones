<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: true, // Display description by default, change to false if you want to hide it
    },
  },
  data() {
    return {
      ports: null,
    };
  },
}
</script>

<template>
    <router-link 
        
        :to="{ name: 'ProjectPage', params: {alias: project.alias } }">
        <div class="projectCard">
            <div class="visual-wrapper">
                <img
                    class="projectCard-visual"
                    v-if="project.mainImg"
                    :src="project.mainImg"
                    v-bind:alt="project.mainCap"
                />
                <video
                    class="projectCard-visual"
                    v-if="project.mainVid"
                    autoplay
                    loop
                    muted
                    :src="project.mainVid"
                    v-bind:alt="project.title"
                ></video>
            </div>
            <!-- You can access properties of 'card' here -->
            <div class="projectCard-content">
                <h3 class="projectCard-title">{{ project.title }}</h3>
                <p class="projectCard-description" v-if="showDescription">{{ project.subtitle }}</p>
                <div class="card-tags">
                  <span v-for="tag in project.tag" :key="tag">{{ tag }}</span>
                </div>
            </div>
            <!-- Add more content here as needed -->
        </div>
    </router-link>
</template>