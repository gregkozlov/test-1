type GridType = {
  children: React.ReactNode;
};

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type OnlyNumbers<T> = {
  [Property in keyof T]: number;
};

type SpacesType = Partial<
  OnlyNumbers<{ horizontalSpace; leftSpace; rightSpace; verticalSpace; topSpace; bottomSpace }>
>;

type ColType = {
  children: React.ReactNode;
  size: Range<1, 13>;
} & Partial<SpacesType>;

type RowType = GridType & Partial<Omit<SpacesType, "leftSpace" | "rightSpace">>;
