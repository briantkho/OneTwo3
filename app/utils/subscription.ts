type SwitchCasesType = {
  payload: any;
  setState: any;
};

export const switchCases = ({ payload, setState }: SwitchCasesType) => {
  switch (payload.eventType) {
    case 'INSERT':
      setState((prevItems: any) => [...prevItems, payload.new]);
      break;
    case 'DELETE':
      setState((prevItems: any) =>
        prevItems.filter((item: any) => item.id !== payload.old.id)
      );
      break;
    case 'UPDATE':
      setState((prevItems: any) =>
        prevItems.map((item: any) =>
          item.id === payload.new.id ? payload.new : item
        )
      );
      break;
  }
};
