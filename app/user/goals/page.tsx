import GoalsCard from './GoalsCard';

export default function GoalsPage() {
  return (
    <div>
      {/* @ts-expect-error */}
      <GoalsCard />
    </div>
  );
}
