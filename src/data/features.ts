
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
    title: "Stat",
    path: "/stat",
    description: "指定したディレクトリ配下にあるファイルに関する統計情報を表示します。",
  } as Feature,
];

export {features, Feature};
