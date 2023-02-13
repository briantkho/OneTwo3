import React from 'react';
import { VscLoading } from 'react-icons/vsc';

export const Loading = () => {
  return (
    <div className="flex bg-opacity-50 bg-black w-screen h-screen fixed justify-center items-center">
      <VscLoading className="animate-spin text-9xl fill-white-bg" />
    </div>
  );
};
