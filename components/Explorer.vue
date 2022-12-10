<template>
  <div id="ExplorerDiv">
    <h1>GREP</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GrepPage',
  props: ["name"],
});
</script>
