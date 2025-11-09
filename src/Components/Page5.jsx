import React, { useState } from "react";
import background from "../assets/background.png";
import mandalaTop from "../assets/footercontact01.png";
import mandalaBottom from "../assets/footercontact02.png";

const Page5 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative min-h-screen w-full bg-[#F9F1ED] bg-cover bg-center overflow-hidden flex items-center justify-center px-6 md:px-20 py-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Mandala decorations */}
      <img
        src={mandalaTop}
        alt="Mandala Top Right"
        className="absolute top-0 right-0 w-72 md:w-[400px] opacity-100 pointer-events-none select-none"
      />
      <img
        src={mandalaBottom}
        alt="Mandala Bottom Left"
        className="absolute bottom-0 left-0 w-80 md:w-[450px] opacity-100 pointer-events-none select-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row gap-10 md:gap-24">
        {/* Left Side Paragraph Text */}
        <div className="md:w-1/2 text-left flex flex-col justify-center space-y-5">
          <p className="text-sm md:text-base text-[#333333] leading-relaxed whitespace-pre-line">
            {`Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
Let's catch up over coffee.
Great stories always begin with a good conversation.`}
          </p>
        </div>

        {/* Right Side Form and Heading */}
        <div className="md:w-1/2 max-w-md flex flex-col">
          {/* Above form heading */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-normal text-[#333333]">
              Join the Story
            </h1>
            <p className="text-sm md:text-base text-[#4D4D4D] mt-2">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={handleChange}
              required
              className="mb-6 px-4 py-3 rounded-lg border border-[#F47B58] bg-white placeholder-[#CC7A55] text-[#333333] text-base focus:outline-none focus:ring-2 focus:ring-[#F47B58]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={form.email}
              onChange={handleChange}
              required
              className="mb-6 px-4 py-3 rounded-lg border border-[#F47B58] bg-white placeholder-[#CC7A55] text-[#333333] text-base focus:outline-none focus:ring-2 focus:ring-[#F47B58]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="mb-6 px-4 py-3 rounded-lg border border-[#F47B58] bg-white placeholder-[#CC7A55] text-[#333333] text-base focus:outline-none focus:ring-2 focus:ring-[#F47B58]"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="mb-6 px-4 py-3 rounded-lg border border-[#F47B58] bg-white placeholder-[#CC7A55] text-[#333333] text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#F47B58]"
            />

            <button
              type="submit"
              className="self-start bg-[#F47B58] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#e76a47] transition-colors duration-300 font-semibold text-base"
            >
              Submit
            </button>
          </form>

          {/* Contact info below form */}
          <div className="flex items-center mt-12 text-[#F47B58] space-x-6">
            <a
              href="mailto:vernita@varnanfilms.co.in"
              className="underline font-semibold text-lg hover:text-[#e76a47]"
            >
              vernita@varnanfilms.co.in
            </a>
            <span className="border-l border-[#F47B58] h-6"></span>
            <a
              href="tel:+919873684567"
              className="font-bold text-lg hover:text-[#e76a47]"
            >
              +91 98736 84567
            </a>
          </div>

          {/* Status messages */}
          {status === "loading" && (
            <p className="mt-4 text-gray-600">Sending...</p>
          )}
          {status === "success" && (
            <p className="mt-4 text-green-600">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600">❌ Failed to send message.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page5;
