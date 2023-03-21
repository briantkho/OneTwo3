type TagType = {
  category: string;
  data: any;
};

export default function Tag({ category, data }: TagType) {
  const tagSelector = () => {
    if (category === 'status') {
      //   if (data === 0) {
      //     return <div className="status bg-[#00000025]">To Do</div>;
      //   } else
      if (data === 0) {
        return <div className="tag bg-warning-500">In Progress</div>;
      } else if (data === 2) {
        return <div className="tag bg-secondary-500">Complete</div>;
      }
    }
    if (category === 'timeRemaining') {
      let time = data;
      if (data > 30 && data < 62) {
        time = 1;
        return <div className="tag bg-primary-500">{time} month left</div>;
      } else if (data > 182) {
        time = 6;
        return (
          <div className="tag bg-primary-500">Over {time} months left</div>
        );
      } else {
        return <div className="tag bg-primary-500">{time} day(s) left</div>;
      }
    }
    if (category === 'frequency') {
      return <div className="tag bg-primary-500">{data} times a week</div>;
    }
  };

  return <div>{tagSelector()}</div>;
}
