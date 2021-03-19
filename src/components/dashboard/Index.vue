<template>
  <WatermelonDrawer/>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import WatermelonDrawer from "@/components/dashboard/component/core/WatermelonDrawer.vue";

@Component({
  components:{
    WatermelonDrawer
  }
})
export default class Index extends Vue {
}
</script>

<style scoped>

</style>
