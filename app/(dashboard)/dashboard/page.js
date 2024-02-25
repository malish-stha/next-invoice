import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <div className="p-4 lg:pl-72 lg:py-16 bg-zinc-900">
        <div className="flex items-center justify-between ">
          <h1 className="text-4xl text-white font-bold lg:text-5xl">
            Create Invoice
          </h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <section className="lg:pl-72 px-4 ">
        <div>
          <form>
            <h2 className="text-zinc-900 font-bold text-xl mb-8">
              Your Details
            </h2>
            <article className="article">
              <label htmlFor="name" className="label">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="input"
              />
              <small>Your official name or company name.</small>
            </article>
          </form>
        </div>
        <div></div>
      </section>
    </>
  );
}
