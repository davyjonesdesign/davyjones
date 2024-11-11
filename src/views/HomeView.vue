<template>
      <div class="page-wrap">
       
        <div class="page-header">
            <h2 class="page-heading">Projects</h2>
            <!-- Tag buttons -->
            <div class="taglabel-section">
                <p class="tags-label">Filter by:</p>

                <div class="tag-section">

                    <button v-for="tag in uniqueTags" :key="tag" @click="filterProjects(tag)" :class="{ active: tags.includes(tag) }">{{ tag }}</button>
                </div>
        </div>
        </div>
        <!-- Project cards filtered by selected tags -->
        <div class="project-section">
          <ProjectCard
            class="project-card"
            v-for="project in filteredProjects"
            :key="project.alias"
            :project="project"
            :show-description="true"
          />
        </div>
      </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import data from "../data/data";

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            ProjectCards: data,
            tags: [] // Define an array to hold the selected tags
        }
    },
    methods: {
        filterProjects(tag) {
            // if (this.tags.includes(tag)) {
            //     // If the tag is already selected, remove it
            //     this.tags = this.tags.filter(t => t !== tag);
            // } else {
            //     // If the tag is not selected, add it
            //     this.tags.push(tag);
            // }
            // this.tags = [tag];
            if (this.tags.includes(tag)) {
      // If the clicked tag is already selected, deselect it
      this.tags = [];
    } else {
      // If the clicked tag is not selected, deselect all other tags and select the clicked tag
      this.tags = [tag];
    }
        }
    },
    computed: {
        // Compute unique tags from all projects
        uniqueTags() {
            const tags = new Set();
            this.ProjectCards.forEach(project => {
                project.tag.forEach(tag => tags.add(tag));
            });
            return Array.from(tags);
        },
        // Compute filtered projects based on selected tags
        filteredProjects() {
            if (this.tags.length === 0) {
                // If no tags selected, return all projects
                return this.ProjectCards;
            } else {
                // Filter projects based on selected tags
                return this.ProjectCards.filter(project =>
                    project.tag.some(tag => this.tags.includes(tag))
                );
            }
        }
    }
}
</script>

<style>

</style>
../data/data-archived