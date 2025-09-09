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

            
    
        <!-- objectives -->
        <div v-if="project.objectives" class="dataCards-section">
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
                    <h3>Tools</h3>
                </div>
                <p 
                    v-for="tool in project.tools" 
                    :key="tool">{{ tool }}</p>
            </div>
                
        </div>

        <!-- overview -->
        <div v-if="project.overview" class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3 >Overview</h3>
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
        <div v-if="project.method" class="data-section">
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
        <div class="data-section" v-if="project.outcome">
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

<!-- NET NEW -->
        <!-- challenge -->
        <div v-if="project.challenge" class="dataCards-section">
            <div class="dataCard" id="objectives">
                <div class="dataCard-title">
                    <h3>Challenge</h3>
                </div>
                <p>{{ project.challenge }}</p>
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
                    <h3>Tools</h3>
                </div>
                <p 
                    v-for="tool in project.tools" 
                    :key="tool">{{ tool }}</p>
            </div>
                
        </div>

        <!-- my role -->
        <div v-if="project.myRole" class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>My Role</h3>
                    <ul class="copy-wrapper">
                        <li v-for="project in project.myRole" :key="project">{{ project }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- process -->
        <div v-if="project.process" class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>Process</h3>
                    <ul class="copy-wrapper">
                        <li v-for="project in project.process" :key="project">{{ project }}</li>
                    </ul>
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

        <!-- impact -->
        <div v-if="project.impact" class="data-section">
            <div class="data-wrap">
                <div class="data-content">
                    <h3>Impact</h3>
                    <ul v-if="project.impact" class="copy-wrapper">
                        <li v-for="project in project.impact" :key="project">{{ project }}</li>
                    </ul>
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
    </div> 
</template>