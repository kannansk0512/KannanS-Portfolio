import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    const fullMessage = `Hi, I'm ${name}%0ASubject: ${subject}%0AMessage: ${message}`;
    
    const phoneNumber = "+917907111490"; 

    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, "_blank");

    form.current.reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#2563eb] mx-auto mt-4"></div>
        <p className="text-[#cbd5e1] mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0a192f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendToWhatsApp}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131925] text-white border border-gray-600 focus:outline-none focus:border-[#2563eb]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131925] text-white border border-gray-600 focus:outline-none focus:border-[#2563eb]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131925] text-white border border-gray-600 focus:outline-none focus:border-[#2563eb]"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 text-white font-semibold rounded-md hover:opacity-90 transition shadow-[0_0_12px_2px_rgba(37,99,235,0.5)]"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
