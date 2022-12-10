<template>
  <div id="RootDiv">
    <FeatureDiv />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style scoped>
#RootDiv {
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
}
</style>
