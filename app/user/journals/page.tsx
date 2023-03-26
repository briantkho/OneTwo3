import JournalCard from './JournalCard';
import JournalForm from './JournalForm';

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <p className="header">My Journals</p>
      <JournalForm />
      <JournalCard />
    </div>
  );
}
