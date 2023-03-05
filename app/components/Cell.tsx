import Checkbox from './Checkbox';

type CellType = {
  data: any;
};

export const Cell = ({ data }: CellType) => {
  return (
    <div className="bg-white-cell rounded-xl h-min p-2 flex justify-between items-center">
      <div className="flex flex-col">
        <p className="font-thin text-lg">{data.title}</p>
        {data.description ? (
          <p className="font-thin text-sm">{data.description}</p>
        ) : null}
      </div>
      <Checkbox data={data} />
    </div>
  );
};
