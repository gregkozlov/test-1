type TableType = {
  table: {
    header: {
      title: string;
      rightIcon: boolean;
    }[];
    body: {
      content: JSX.Element;
    }[][];
  };
  height: number | string;
  onRowClick?: () => void;
  rowStyles: { [key: string]: string | number };
};
