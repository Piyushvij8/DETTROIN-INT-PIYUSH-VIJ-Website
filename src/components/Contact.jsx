import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("https://dettroin-int-piyush-vij-website.onrender.com/api/enquiries",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof TypeError
          ? "Couldn't reach the server. Is the API running on port 3001?"
          : err.message
      );
    }
  };

  return (
    <section id="contact" className="bg-sage">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">
        <div>
          <p className="eyebrow mb-4">Visit or reach us</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-8">
            Come see the campus for yourself.
          </h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-forest">Address</dt>
              <dd className="mt-1 text-ink/80">
                Krishna International School, Delhi G.T. Road, Aligarh &ndash; 202001, Uttar Pradesh, India
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-forest">Phone</dt>
              <dd className="mt-1 text-ink/80">+91 983-70-50000 &middot; +91 735-10-50000</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-forest">Email</dt>
              <dd className="mt-1 text-ink/80">info@kisaligarh.com</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-forest">School code</dt>
              <dd className="mt-1 text-ink/80 font-mono">KISALG</dd>
            </div>
          </dl>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 border border-ink/10 shadow-sm"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-forest mb-1">
              Send an enquiry
            </p>
            <p className="text-ink/50 text-sm mb-6">
              Stored securely and reviewed by the admissions office.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-ink/20 py-2.5 text-ink placeholder:text-ink/40 focus:border-marigold outline-none disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-ink/20 py-2.5 text-ink placeholder:text-ink/40 focus:border-marigold outline-none disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  minLength={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to know?"
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-ink/20 py-2.5 text-ink placeholder:text-ink/40 focus:border-marigold outline-none resize-none disabled:opacity-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 w-full bg-ink text-sage font-mono text-xs uppercase tracking-wider py-3.5 rounded-sm hover:bg-forest transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send enquiry"}
            </button>

            {status === "success" && (
              <p role="status" className="mt-4 text-sm text-forest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                Thank you — your enquiry has been received. We'll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-4 text-sm text-maroon flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-maroon" />
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="bg-ink-dark border-t border-sage/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-sage/50 tracking-wide">
            &copy; {new Date().getFullYear()} Krishna International School, Aligarh
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/krishnainternationalaligarh" className="text-sage/60 hover:text-marigold text-sm">Facebook</a>
            <a href="https://www.instagram.com/krishnainternationalaligarh/" className="text-sage/60 hover:text-marigold text-sm">Instagram</a>
            <a href="https://www.youtube.com/channel/UCfAsGL009vpBCbLDxP9fQsw/featured" className="text-sage/60 hover:text-marigold text-sm">YouTube</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
