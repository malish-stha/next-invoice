import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="fixed flex flex-col items-start justify-between h-screen w-64 bg-zinc-900 p-4">
        <Button variant="secondary">Welcome</Button>

        <ul className="space-y-4">
          <li>
            <Button variant="customButton">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button variant="customButton">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
          </li>
        </ul>

        <p className="text-zinc-400 text-xs">&copy; Malish 2024</p>
      </div>
    </>
  );
}
