<script>
import TextLink from '@/components/TextLink.vue';
import LinkIcon from "@/components/icons/IconLink.vue";

export default {
    components: {
        TextLink,
        LinkIcon
    },
    data() {
        return {
            TextLink,
            LinkIcon
        }
    }
}
</script>

<template>
    <footer>
        <p>Davy Jones</p>
        <text-link class="footer-link" url="https://github.com/davyjonesdesign/davyjones" target="_blank" :show-icon="true"
            :icon="LinkIcon" :text="'Github Repository'"></text-link>
        <p>© 2024</p>
    </footer>
</template>