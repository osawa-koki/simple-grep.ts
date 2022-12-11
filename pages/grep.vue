<template>
  <div>
    <input ref="dir_selector" type="file" class="hidden" webkitdirectory @change="handleDirSelect" />
    <b-button id="DirSelectButton" variant="outline-primary" @click="select_dir">ディレクトリを選択</b-button>
    <Explorer id="ExplorerContainer" :files="files" />
    <b-button-group id="TabSwitcher">
      <b-button variant="outline-success" @click="GrepOn">Grep</b-button>
      <b-button variant="outline-success" @click="ResultOn">Result</b-button>
    </b-button-group>
    <div id="MainFrame">
      <SearchOn v-if="isTabGrep" @grep_start="grep_start" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FileWrapper } from '@/src/interface';

enum TabState {
  Grep,
  Result,
}

export default Vue.extend({
  name: 'GrepPage',
  data() {
    return {
      files: [] as FileWrapper[],
      tab_state: TabState.Grep as TabState,
      target_string: '',
      is_regex: true,
      target_extentions: [] as string[],
    };
  },
  computed: {
    isTabGrep(): boolean {
      return this.tab_state === TabState.Grep;
    },
  },
  methods: {
    handleDirSelect(event: any): void {
      const files = event.target.files;
      this.files = [] as FileWrapper[];
      for (let i = 0; i < files.length; i++) {
        const file = {
          file: files[i],
          flag: false,
        } as FileWrapper;
        this.files.push(file);
      }
      this.files.sort((a, b) => a.file.webkitRelativePath.localeCompare(b.file.webkitRelativePath));
    },
    select_dir(): void {
      const DirSelector = this.$refs.dir_selector as HTMLInputElement;
      DirSelector.click();
    },
    GrepOn(): void {
      this.tab_state = TabState.Grep;
    },
    ResultOn(): void {
      this.tab_state = TabState.Result;
    },
    grep_start(TargetString: string, IsRegex: boolean, TargetExtentions: string[]): void {
      this.target_string = TargetString;
      this.is_regex = IsRegex;
      this.target_extentions = TargetExtentions;
      this.files.forEach((file) => {
        file.flag = false;
        if (TargetExtentions.includes(file.file.name.split('.').pop() as string) === false) {
          return;
        }
        file.file.text().then((text) => {
          if (IsRegex) {
            const regex = new RegExp(TargetString, 'g');
            const result = text.match(regex);
            if (result) {
              file.flag = true;
            }
          } else {
            // eslint-disable-next-line no-lonely-if
            if (text.includes(TargetString)) {
              file.flag = true;
            }
          }
        });
      });
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
#MainFrame {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 300px;
  right: 0;
  border: 1px solid gray;
}
</style>
