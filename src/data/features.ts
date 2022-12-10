
type Feature = {
  title: string;
  path: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Grep",
    path: "/grep",
    description: "正規表現を使用して指定したディレクトリ配下のファイルを検索します。",
  } as Feature,
  {
    title: "Diff",
    path: "/diff",
    description: "指定した2つのファイルの差分を表示します。",
  } as Feature,
];

export {features, Feature};
