import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="fixed flex flex-col items-start justify-between h-screen w-64 bg-zinc-900 p-4">
        <Button variant="secondary">Welcome</Button>

        <ul>
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
      </div>
    </>
  );
}
