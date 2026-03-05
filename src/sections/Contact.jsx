import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_um6xt55",
        "template_6hgc4di",
        form.current,
        "PecynzIrBWpdx8ybw",
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => setStatus("❌ Failed to send message."),
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <h2 className="section-title">CONTACT ME</h2>
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <GlassCard className="p-8 w-full md:w-2/3 ">
          <p className="text-slate-400 mb-8">
            Interested in working together? Send me a message directly.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
            {/* Name */}
            <div className="relative group">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 transition group-focus-within:text-cyan-500" />
              &nbsp;
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="contact-input"
              />
            </div>
            {/* Email */}
            <div className="relative group" style={{ paddingTop: "1%" }}>
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
              &nbsp;
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
                className="contact-input"
              />
            </div>
            {/* Message */}
            <div className="relative group" style={{ paddingTop: "1%" }}>
              <FiMessageSquare className="absolute left-4 top-5 text-cyan-400" />
              &nbsp;
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
                className="contact-input"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
              style={{ paddingTop: "1%", marginLeft: "2%" }}
            >
              <FiSend /> Send Message
            </motion.button>

            {status && (
              <p className="text-center text-cyan-400 mt-4">{status}</p>
            )}
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
