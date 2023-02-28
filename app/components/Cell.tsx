type CellType = {
  data: any;
};

export const Cell = ({ data }: CellType) => {
  return (
    <div className="bg-white-cell rounded-xl h-min p-2">
      <p className="font-thin text-lg dark:text-white-bg">{data.title}</p>
      {data.description ? (
        <p className="font-thin text-sm dark:text-white-bg">
          {data.description}
        </p>
      ) : null}
    </div>
  );
};
