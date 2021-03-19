<template>
  <Index></Index>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from './components/dashboard/Index.vue';

@Component({
  components: {
    Index,
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
