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
  rowStyles: { [key: string]: string | number };
};
