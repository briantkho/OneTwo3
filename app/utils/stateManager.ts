import { create } from 'zustand';

export const useModalStore = create((set) => ({
  modalState: false,
  toggleState: () =>
    set((state: any) => ({ modalState: state.modalState ? false : true })),
}));

// export const controls = () => {
//   const increasePopulation = useModalStore(
//     (state: any) => state.increasePopulation
//   );
//   return <

// //   <button onClick={increasePopulation}>one up</button>;
// };
