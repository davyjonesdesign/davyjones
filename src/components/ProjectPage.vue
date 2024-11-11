<script>
import data from "../data/data";
import TextLink from "./TextLink.vue";
import BackIcon from "./icons/IconBack.vue"
// import LinkIcon from "./icons/IconLink.vue"

export default {
    components: {
        TextLink,
        BackIcon,
        // LinkIcon
    },
    data() {
        return {
            TextLink,
            BackIcon,
            // LinkIcon
        }
    },
    name: "ProjectPage",
    props: ["alias"],
    created() {
    const alias = this.$route.params.alias;
        const project = data.find((el) => el.alias === alias);
        if (!project) {
        return this.$router.push("404");
        }
        this.project = project;
    },
    beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-up'
    next()
  },
}

</script>


<template>
    <div class="page-wrap project-page">
        
        <!-- data header -->
        <div class="data-header"> 
            <div class="header-content">
                <text-link 
                    to="/" 
                    text="Back to Home"  
                    :show-icon="true"
                    :icon="BackIcon">
                </text-link>

                <div class="data-title">
                    <h2>{{ project.title }}</h2>
                    <h5>{{ project.subtitle }}</h5>
                </div>

            </div>
            <div class="data-visual">
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
        </div>

            
    
        <!-- data cards -->
        <div class="dataCards-section">
            <div class="dataCard" id="objectives">
                <div class="dataCard-title">
                    <h3>Objectives</h3>
                </div>
                <ul>
                    <li 
                    v-for="objective in project.objectives" 
                    :key="objective">{{ objective }}</li>
                </ul>
            </div>
            <div class="dataCard" id="links" v-if="project.links">
                <div class="dataCard-title">
                    <h3>Project Links</h3>
                </div>
                <text-link
                    v-for="(link, index) in project.links"
                    :key="index"
                    :url=link.link
                    class="project-links-link"
                    v-bind:text="link.linkDescription"  
                    :show-icon="true"
                    :icon="LinkIcon">
                </text-link>
            </div>
            <div class="dataCard" id="toolbox">
                <div class="dataCard-title">
                    <h3>Toolbox</h3>
                </div>
                <p 
                    v-for="tool in project.tools" 
                    :key="tool">{{ tool }}</p>
            </div>
                
        </div>

        <!-- overview -->
        <div class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>Overview</h3>
                    <div class="copy-wrapper">
                        <p v-for="project in project.overview" :key="project">{{ project }}</p>
                    </div>
                </div>
                <div class="data-visual">
                    <img 
                    v-bind:alt="project.overviewCap" v-if="project.overviewImg" 
                    :src="project.overviewImg" />
                    <iframe
                        v-if="project.overviewFrame"
                        :src="project.overviewFrame"
                        allowfullscreen
                    ></iframe>
                    
                    <p>{{ project.overviewCap }}</p>
                </div>
            </div>
        </div>

        <!-- method & approach -->
        <div class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>Method</h3>
                    <div class="copy-wrapper">
                        <p v-for="project in project.method" :key="project">{{ project }}</p>
                    </div>
                </div>
                <div class="data-visual">
                    <img
                    v-bind:alt="project.methodCap" v-if="project.methodImg" 
                    :src="project.methodImg" />
                    <iframe
                        v-if="project.methodFrame"
                        :src="project.methodFrame"
                        allowfullscreen
                    ></iframe>
                    
                    <p>{{ project.methodCap }}</p>
                </div>
            </div>
        </div>

        <!-- outcome -->
        <div class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>Outcome</h3>
                    <div class="copy-wrapper">
                        <p v-for="project in project.outcome" :key="project">{{ project }}</p>
                    </div>
                </div>
                <div class="data-visual">
                    <img
                    v-bind:alt="project.outcomeCap" v-if="project.outcomeImg" 
                    :src="project.outcomeImg" />
                    <iframe
                        v-if="project.outcomeFrame"
                        :src="project.outcomeFrame"
                        allowfullscreen
                    ></iframe>
                    
                    <p>{{ project.outcomeCap }}</p>
                </div>
            </div>
        </div>
    </div> 
</template>