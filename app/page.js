import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  const { userId } = auth();
  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <Button variant="link">
          <Link href="/">Invoicer</Link>
        </Button>
        {userId ? (
          <Button>
            <Link href="/dashboard">Go To Dashboard</Link>
          </Button>
        ) : (
          <ul className="flex items-center gap-4">
            <li>
              <Button variant="secondary">
                <Link href="/sign-up" />
                Sign Up
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/sign-in" />
                Sign In
              </Button>
            </li>
          </ul>
        )}
      </header>
      <section className="py-32 space-y-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl text-zinc-800 font-bold">
          Welcome to Invoicer
        </h1>
        <p className="text-muted-foreground text-lg lg:text-xl">
          Here you can create invoices for all your clients, businesses.
        </p>
        {userId ? (
          <Button>
            <Link href="/dashboard">Go To Dashboard</Link>
          </Button>
        ) : (
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Button variant="secondary">
                <Link href="/sign-up" />
                Sign Up
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/sign-in" />
                Sign In
              </Button>
            </li>
          </ul>
        )}
      </section>
    </div>
  );
}
