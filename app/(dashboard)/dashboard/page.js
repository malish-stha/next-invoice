import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <button>Invoicer</button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
