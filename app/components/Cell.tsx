type CellType = {
  data: any;
};

export const Cell = ({ data }: CellType) => {
  return (
    <div className="bg-primary-500">
      <h1>{data.title}</h1>
    </div>
  );
};
