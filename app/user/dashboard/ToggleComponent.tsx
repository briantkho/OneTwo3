'use client';
import { useModalStore } from '@/app/utils/stateManager';

export default function ToggleComponent() {
  const toggleState = useModalStore((state) => state.setModalState);

  return <button onClick={toggleState}>+</button>;
}
