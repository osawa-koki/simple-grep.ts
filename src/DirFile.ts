
type Dir = {
  children: (Dir | File)[];
};

type DirFile = {
  path: string;
  content: File | Dir;
};

export default DirFile;
