"use client";

import { useState } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8">
        <CheckCircle size={48} className="text-green-500" />
        <p className="font-bold text-lg text-[#0a1628]">Message sent!</p>
        <p className="text-slate-500 text-sm">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        isRequired
        placeholder="Jane Smith"
        classNames={{
          input: "bg-white",
          inputWrapper: "border border-slate-200 hover:border-slate-300",
        }}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        isRequired
        placeholder="jane@example.com"
        classNames={{
          input: "bg-white",
          inputWrapper: "border border-slate-200 hover:border-slate-300",
        }}
      />
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        isRequired
        placeholder="I'd like to learn more about your programs..."
        minRows={5}
        classNames={{
          input: "bg-white resize-none",
          inputWrapper: "border border-slate-200 hover:border-slate-300",
        }}
      />
      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errorMsg}</p>
      )}
      <Button
        type="submit"
        isLoading={status === "loading"}
        className="w-full bg-[#0a1628] text-white font-bold py-3 rounded-xl"
      >
        Send Message
      </Button>
    </form>
  );
}
