<template>
  <div>
    <input ref="dir_selector" type="file" class="hidden" webkitdirectory @change="handleDirSelect" />
    <b-button id="DirSelectButton" variant="outline-primary" @click="select_dir">ディレクトリを選択</b-button>
    <Explorer id="ExplorerContainer" :files="files" />
    <b-button-group id="TabSwitcher">
      <b-button variant="outline-success">Grep</b-button>
      <b-button variant="outline-success">Result</b-button>
    </b-button-group>
    <div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum TabState {
  Grep,
  Result,
}

export default Vue.extend({
  name: 'GrepPage',
  data() {
    return {
      files: [] as File[],
      tab_state: TabState.Grep,
    };
  },
  methods: {
    handleDirSelect(event: any): void {
      const files = event.target.files;
      this.files = [] as File[];
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
      }
      this.files.sort((a, b) => a.webkitRelativePath.localeCompare(b.webkitRelativePath));
    },
    select_dir(): void {
      const DirSelector = this.$refs.dir_selector as HTMLInputElement;
      DirSelector.click();
    },
  },
});
</script>

<style scoped>
.hidden {
  display: none;
}
#DirSelectButton {
  position: fixed;
  top: 1rem;
  left: 1rem;
}
#ExplorerContainer {
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  width: 300px;
  border: 3px double gray;
}
#TabSwitcher {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
