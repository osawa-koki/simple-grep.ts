<template>
  <div>
    <div id="Viewer" v-html="content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FileViewer',
  props: {
    content: {
      type: '' as string,
      required: true,
    },
  },
  methods: {
  },
});
</script>

<style scoped>
#Viewer {
  position: absolute;
  inset: 0;
  padding: 1rem;
  white-space: pre-wrap;
  font-family: 'Consolas', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: auto;
}
</style>
