import React from "react";
import { format } from "date-fns/format";

export default function PreviewInvoice({ values }) {
  return (
    <>
      <div className=" sticky top-4 border border-zinc-300 p-4 rounded-lg scale-75 ">
        <article className="flex flex-col items-end justify-end">
          <h2 className="text-2xl text-slate-900 font-bold">{values.name}</h2>
          <p className="text-muted-foreground">{values.email}</p>
          <p className="text-muted-foreground">{values.address}</p>
        </article>

        <article className="my-8">
          <h2 className="text-lg text-zinc-800 font-bold">
            {values.clientName}
          </h2>
          <p className="text-muted-foreground">{values.clientEmail}</p>
          <p className="text-muted-foreground"> {values.clientAddress}</p>
        </article>

        <article className="my-8 flex flex-col items-end justify-end">
          <h2 className="text-2xl text-zinc-900 font-bold">Invoice Details</h2>
          <p className="text-muted-foreground">
            Invoice Date:{" "}
            {values.invoiceDate &&
              format(new Date(values.invoiceDate), "do MMMM yyyy")}
          </p>
          <p className="text-muted-foreground">
            Due Date:{" "}
            {values.dueDate && format(new Date(values.dueDate), "do MMMM yyyy")}
          </p>
        </article>

        <article className="mb-8">
          <table width="100%">
            <thead>
              <tr className="bg-zinc-200">
                <td>Items Name</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {values.items.map((item) => (
                <tr key={item.id}>
                  <td className="text-muted-foreground text-sm">{item.item}</td>
                  <td className="text-muted-foreground text-sm">
                    {item.quantity}
                  </td>
                  <td className="text-muted-foreground text-sm">
                    {item.price}
                  </td>
                  <td className="text-muted-foreground text-sm">
                    {item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article>
          <h2 className="text-4xl text-zinc-900 font-bold my-8">
            Rs.
            {values.totalAmount}
          </h2>
        </article>

        <article className="pb-8">
          <h4 className="text-2xl text-slate-900 font-bold">
            Additional Notes:
          </h4>
          <p className="text-muted-foreground w-1/2 text-xs">{values.notes}</p>
        </article>

        {/* Invoice Footer */}
        <article className="border-t border-zinc-300 py-8">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li className="text-muted-foreground text-sm">
              <span className="text-zinc-800 font-bold">Email:</span>
              {values.email}
            </li>
            <li className="text-muted-foreground text-sm">
              <span className="text-zinc-800 font-bold">
                Bank Account Holder:
              </span>
              {values.name}
            </li>
            <li className="text-muted-foreground text-sm">
              <span className="text-zinc-800 font-bold">Bank Name:</span>
              {values.bankName}
            </li>
            <li className="text-muted-foreground text-sm">
              <span className="text-zinc-800 font-bold">
                Bank Account Number:
              </span>
              {values.bankAccountNumber}
            </li>
            <li className="text-muted-foreground text-sm">
              <span className="text-zinc-800 font-bold">Phone Number:</span>
              {values.phoneNumber}
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
