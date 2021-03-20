<template>
    <v-app>
        <WatermelonDrawer/>
        <WatermelonView/>
    </v-app>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import WatermelonDrawer from "@/components/dashboard/component/core/WatermelonDrawer.vue";
import WatermelonView from "@/components/dashboard/component/core/WatermelonView.vue";

@Component({
    components: {
        WatermelonView,
        WatermelonDrawer
    }
})
export default class Index extends Vue {
}
</script>

<style scoped>

</style>
