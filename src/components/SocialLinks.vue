<script>
import TextLink from '@/components/TextLink.vue';
import GitIcon from "../components/icons/IconGit.vue";
import LinkedIcon from "../components/icons/IconLinked.vue";

export default {
    components: {
        TextLink,
        GitIcon,
        LinkedIcon
    },
    data() {
        return {
            TextLink,
            GitIcon,
            LinkedIcon
        }
    }
}
</script>

<template>
    <div class="social-links">
        <text-link url="https://www.linkedin.com/in/davyjonesme/" :show-icon="true"
            :icon="LinkedIcon"></text-link>
        <text-link url="https://github.com/davyjonesdesign" :show-icon="true" :icon="GitIcon"></text-link>
    </div>
</template>
