import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <div>
        <button>Invoicer</button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
