"use client";

import { log } from "console";
import { useEffect, useState } from "react";

type PopupProps = {
  buttonText?: string;
  buttonClass?: string;
  buttonChildren?: React.ReactNode;
};

export default function FreeConsultationPopup({
  buttonText = "Book a Free Consultation",
  buttonClass,
  buttonChildren,
}: PopupProps) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "subha",
    email: "infolinematrix@gmail.com",
    phone: "7854215478",
    date: "01/01/2026",
    time: "10.15",
    mode: "call",
    notes: "Note",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  useEffect(() => {
    const alreadyOpened = localStorage.getItem("demo_popup_opened");
    if (alreadyOpened) return;

    let timer: NodeJS.Timeout;

    const removeListeners = () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleExit);
    };

    const openPopup = () => {
      setOpen(true);
      localStorage.setItem("demo_popup_opened", "true");
      removeListeners();
    };

    // 1️⃣ Time trigger (30 sec)
    timer = setTimeout(openPopup, 30000);

    // 2️⃣ Scroll trigger (60%)
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent > 60) openPopup();
    };

    // 3️⃣ Exit intent
    const handleExit = (e: MouseEvent) => {
      if (e.clientY < 10) openPopup();
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleExit);

    return () => removeListeners();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.date ||
      !form.time ||
      !form.mode
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/free-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setMessage("Consultation booked successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          mode: "",
          notes: "",
        });
      } else {
        setMessage("Failed to book consultation.");
      }
    } catch (err) {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openPopup}
        className={
          buttonClass ||
          "px-6 py-3 rounded-full bg-[#734B66] text-white font-medium hover:bg-[#5e3d54] transition flex items-center gap-2"
        }
      >
        {buttonText}
        {buttonChildren}
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-gray-800 p-12 rounded-3xl max-w-xl w-full relative shadow-2xl border border-gray-200">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold mb-3">Free Consultation</h2>
            <p className="mb-6 text-gray-600">
              Schedule your free consultation with our experts team. Select your
              preferred date, time, and mode of communication.
            </p>

            {/* {message && (
              <p className="text-center text-sm my-2 text-green-600">
                {message}
              </p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                />

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                />

                <select
                  name="mode"
                  value={form.mode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66]"
                >
                  <option value="">Mode of Communication</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="call">Call</option>
                  <option value="google-meet">Google Meet</option>
                </select>
              </div>

              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Additional Notes"
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#734B66] resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#734B66] text-white py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#5e3d54] transition"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
            </form> */}

            {/* Call Button */}
            <a
              href="tel:+919732939123"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📞 Call Us
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919732939123"
              target="_blank"
              className="px-6 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>

            {/* Contact Page */}
            <a
              href="/contact"
              className="px-6 py-3 border border-white text-primary rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              ✉️ Contact Form
            </a>
          </div>
        </div>
      )}
    </>
  );
}
