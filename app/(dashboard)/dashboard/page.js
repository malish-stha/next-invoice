import { Button } from "@/components/ui/button";
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

      <section className="lg:pl-72 px-4 mt-8 lg:grid lg:grid-cols-2">
        <div>
          <form>
            <h2 className="text-zinc-900 font-bold text-xl mb-8">
              Your Details
            </h2>
            <div className="grid gap-8">
              <div className="grid gap-4 md:grid-cols-2">
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

                <article className="article">
                  <label htmlFor="email" className="label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="input"
                  />
                  <small>Your email is optional.</small>
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="address" className="label">
                    Physical / Company address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Your Address"
                    className="input"
                  />
                  <small>
                    Your physical address, company address, street name, or
                    City.
                  </small>
                </article>

                <article className="article">
                  <label htmlFor="phone-number" className="label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Your Phone Number"
                    className="input"
                  />
                  <small>Your phone number or company phone number.</small>
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="bankName" className="label">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Your Bank Name"
                    className="input"
                  />
                </article>

                <article className="article">
                  <label htmlFor="bankAccountNumber" className="label">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    id="bankAccountNumber"
                    placeholder="Your Bank Account Number"
                  />
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="invoice-date" className="label">
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    name="invoice-date"
                    id="invoice-date"
                    placeholder="Invoice Date"
                  />
                </article>

                <article className="article">
                  <label htmlFor="due-date" className="label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="due-date"
                    id="due-date"
                    placeholder="Invoice Due Date"
                  />
                </article>
              </div>
            </div>
            {/* Client Details */}
            <h2 className="text-slate-900 font-bold text-xl my-8">
              Client details
            </h2>

            <div className="grid gap-8">
              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="client-name">Client&apos;s name</label>
                  <input
                    type="text"
                    name="client-name"
                    id="client-name"
                    placeholder="Client's name"
                  />
                </article>

                <article className="article">
                  <label htmlFor="client-email">Client email</label>
                  <input
                    type="email"
                    name="client-email"
                    id="client-email"
                    placeholder="Client email"
                  />
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="client-address">Client&apos;s address</label>
                  <input
                    type="text"
                    name="client-address"
                    id="client-address"
                    placeholder="Client's address"
                  />
                </article>
              </div>
            </div>

            {/* Items Descriptions */}
            <h2 className="text-slate-900 font-bold text-xl my-8">
              Item descriptions
            </h2>
            <div className="grid gap-8">
              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="item-name">Item name</label>
                  <input
                    type="text"
                    name="item-name"
                    id="item-name"
                    placeholder="Item name"
                  />
                </article>

                <article className="article">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="0"
                  />
                </article>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  />
                </article>

                <article className="article">
                  <label htmlFor="total">Total</label>
                  <div>0</div>
                </article>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Button>Add Item</Button>
              </div>

              {/* Text Area */}
              <div className="grid gap-4 md:grid-cols-2">
                <article className="article">
                  <label htmlFor="additional-notes">Additional notes</label>
                  <textarea
                    name="additional-notes"
                    id="additional-notes"
                    cols="30"
                    rows="5"
                    placeholder="Important information the client should know about"
                    // value={notes}
                    // onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </article>
              </div>
            </div>
            <div className="mt-8 py-12">
              <Button>Preview Invoice</Button>
            </div>
          </form>
        </div>
        {/* Invoice Preview */}
        <div></div>
      </section>
    </>
  );
}
