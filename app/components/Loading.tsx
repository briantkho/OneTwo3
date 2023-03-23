import Image from 'next/image';
import oneTwo3 from '@/public/oneTwo3.svg';

export const Loading = () => {
  return (
    <div className="top-0 left-0 margin-auto flex fixed w-screen h-screen justify-center items-center backdrop-blur-lg z-50 bg-black bg-opacity-40">
      <Image className="animate-spin w-20" src={oneTwo3} alt="Logo" />
    </div>
  );
};
