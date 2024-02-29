"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import PreviewInvoice from "../_components/previewInvoice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";
import html2canvas from "html2canvas";
import { XIcon } from "lucide-react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Client state values
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // Table state values
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [notes, setNotes] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [previewInvoice, setPreviewInvoice] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!item || !quantity || !price) {
      toast.error("Please fill in all the fields");
    } else {
      const newItem = {
        id: uuidv4(),
        item,
        quantity,
        price,
        total: quantity * price,
      };
      setItems([newItem, ...items]);
      setItem("");
      setQuantity("");
      setPrice("");
      toast.success("New items added");
    }
  }

  function calculateTotal() {
    setTotal(quantity * price);
  }

  useEffect(() => {
    calculateTotal();
  }, [quantity, price]);

  function calculateTotalAmount() {
    const allItems = items.map((item) => item.total);

    setTotalAmount(collect(allItems).sum());
  }

  useEffect(() => {
    calculateTotalAmount();
  });

  function handleDelete(id) {
    setItems(items.filter((row) => row.id !== id));
    toast.error("Item deleted successfuly!");
  }

  function handleEdit(id) {
    const editingRow = items.find((row) => row.id === id);
    setItems(items.filter((row) => row.id !== id));
    setIsEditing(true);
    setItem(editingRow.item);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    toast.success("You have edited an item!");
  }

  function createPDF() {
    const invoice = document.getElementById("pdf");
    html2canvas(invoice, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${clientName}.pdf`);
    });
  }

  const values = {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    bankName,
    setBankName,
    bankAccountNumber,
    setBankAccountNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientAddress,
    setClientAddress,
    item,
    setItem,
    quantity,
    setQuantity,
    price,
    setPrice,
    total,
    setTotal,
    items,
    setItems,
    notes,
    setNotes,
    totalAmount,
  };
  return (
    <>
      <ToastContainer />
      <div className="p-4 lg:pl-72 lg:py-16 bg-zinc-900">
        <div className="flex items-center justify-between ">
          <h1 className="text-4xl text-white font-bold lg:text-5xl">
            Create Invoice
          </h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <section className="lg:pl-72 px-4 mt-8 lg:grid lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
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
                    value={bankAccountNumber}
                    onChange={(e) => setBankAccountNumber(e.target.value)}
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
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
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
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
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
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </article>

                <article className="article">
                  <label htmlFor="client-email">Client email</label>
                  <input
                    type="email"
                    name="client-email"
                    id="client-email"
                    placeholder="Client email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
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
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
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
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                </article>

                <article className="article">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="0"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </article>

                <article className="article">
                  <label htmlFor="total">Total</label>
                  <div>{total}</div>
                </article>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Button>Add Item</Button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center justify-start gap-4">
                      <p>{item.item} </p>
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                    <div>
                      <ul className="flex items-center justify-center gap-4">
                        <li>
                          <Button
                            variant="destructive"
                            onClick={() => handleDelete(item.id)}
                          >
                            <TrashIcon />
                          </Button>
                        </li>
                        <li>
                          <Button onClick={() => handleEdit(item.id)}>
                            <Pencil1Icon />
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
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
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </article>
              </div>
            </div>
            <div className="mt-8 py-12">
              <Button onClick={() => setPreviewInvoice(true)}>
                Preview Invoice
              </Button>
            </div>
          </form>
        </div>
        {/* Invoice Preview */}
        <div>
          <PreviewInvoice values={values} />
        </div>

        {previewInvoice && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/75">
            <div className="max-w-5xl mx-auto">
              <ul className="mt-16">
                <li>
                  <Button variant="secondary">Download Invoice</Button>
                </li>
                <li>
                  <Button>
                    <XIcon />
                  </Button>
                </li>
              </ul>
              <PreviewInvoice values={values} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
