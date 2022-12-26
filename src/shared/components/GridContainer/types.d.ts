type GridType = {
  children: React.ReactNode;
  fullHeight?: boolean;
  customStyles?: { [key: string]: string | number };
};

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type NumbersRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type OnlyNumbers<T> = {
  [Property in keyof T]: number;
};

type SpacesType = Partial<
  OnlyNumbers<{ horizontalSpace; leftSpace; rightSpace; verticalSpace; topSpace; bottomSpace }>
>;

type ColType = {
  children: React.ReactNode;
  size: NumbersRange<1, 13>;
  customStyles?: { [key: string]: string };
  contentFullHeight?: boolean;
} & Partial<SpacesType>;

type RowType = GridType & Partial<SpacesType>;
