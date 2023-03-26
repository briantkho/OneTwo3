import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

type SettingsPopupType = {
  handlePopup: any;
  handleDelete: any;
};

export default function SettingsPopup({
  handlePopup,
  handleDelete,
}: SettingsPopupType) {
  return (
    <div className="z-50 absolute glass-bg px-4 py-2 rounded-sm flex w-min">
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-between items-center w-full">
          <button>Edit</button>
          <VscChromeClose
            className="cursor-pointer text-xs"
            onClick={handlePopup}
          />
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
