<template>
    <button class="text-windows-blue underline mt-2" @click="loadMore">
        Load more
    </button>
</template>

<script>
export default {
    name:"LoadMoreButton",
    props:{
        type:String
    },
    methods:{
        async loadMore() {
            try {
                await this.$store.dispatch("library/fetchMore", this.type);
            } catch (err) {
                return console.error(err);
            }
        }
    }
}
</script>