
type extention = {
  value: string;
  selected: boolean;
};

const rawExtentionList: extention[] = [
  { value: 'txt', selected: true },
  { value: 'js', selected: true },
  { value: 'ts', selected: true },
  { value: 'html', selected: true },
  { value: 'htm', selected: false },
  { value: 'scss', selected: false },
  { value: 'css', selected: true },
  { value: 'json', selected: true },
  { value: 'yaml', selected: false },
  { value: 'yml', selected: false },
  { value: 'md', selected: true },
  { value: 'py', selected: false },
  { value: 'rb', selected: false },
  { value: 'pl', selected: false },
  { value: 'java', selected: false },
  { value: 'kt', selected: false },
  { value: 'cs', selected: false },
  { value: 'vb', selected: false },
  { value: 'fs', selected: false },
  { value: 'c', selected: false },
  { value: 'cpp', selected: false },
  { value: 'rs', selected: false },
  { value: 'go', selected: false },
  { value: 'r', selected: false },
  { value: 'vue', selected: false },
  { value: 'jsx', selected: false },
  { value: 'tsx', selected: false },
];

const extentionList = rawExtentionList.map((extention) => extention.value);
const initialExtentionList = rawExtentionList.filter((extention) => extention.selected).map((extention) => extention.value);

export { initialExtentionList, extentionList };
