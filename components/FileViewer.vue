<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="Viewer" v-html="content"></div>
    <!--eslint-enable-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FileViewer',
  props: {
    content: {
      type: String,
      required: true,
    },
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
