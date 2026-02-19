import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare
} from "react-icons/fi";

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
        "PecynzIrBWpdx8ybw"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <h2 className="section-title">CONTACT ME</h2>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card p-8 w-full md:w-2/3"
        >
          {/* Subtitle */}
          <p className="text-slate-400 mb-8">
            Interested in working together? Send me a message directly.
          </p>

          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">

           {/* NAME */}
        <div className="relative group">
        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 transition group-focus-within:text-cyan-500" />
            &nbsp;
            <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="
                w-full pl-12 pr-4 py-4
                rounded-xl
                bg-gradient-to-br from-indigo-900/60 to-slate-900/60
                text-white placeholder-slate-400
                border border-white/10
                backdrop-blur-md
                shadow-inner
                outline-none
                transition-all duration-300

                focus:border-cyan-400
                focus:ring-2 focus:ring-cyan-400/30
                focus:shadow-[0_0_15px_rgba(34,211,238,0.35)]
                " style={{ width: "50%", height: "40%"}}
            />
            </div>

                {/* EMAIL */}
            <div className="relative group">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 transition group-focus-within:text-cyan-300" style={{ paddingTop: "2%"}}/>
                &nbsp;
                <input
                    type="email"
                    name="reply_to"
                    placeholder="Your Email"
                    required
                    className="
                    w-full pl-12 pr-4 py-4
                    rounded-xl
                    bg-gradient-to-br from-indigo-900/60 to-slate-900/60
                    text-white placeholder-slate-400
                    border border-white/10
                    backdrop-blur-md
                    shadow-inner
                    outline-none
                    transition-all duration-300

                    focus:border-cyan-400
                    focus:ring-2 focus:ring-cyan-400/30
                    focus:shadow-[0_0_15px_rgba(34,211,238,0.35)]
                    " style={{ width: "50%", height: "40%"}}
                />
                </div>
                {/* MESSAGE */}
                <div className="relative group" style={{ paddingTop: "2%"}}>
                <FiMessageSquare className="absolute left-4 top-5 text-cyan-400 transition group-focus-within:text-cyan-300"/>
                    &nbsp;
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message..."
                        required
                        className="
                        w-full pl-12 pr-4 py-4
                        rounded-xl
                        bg-gradient-to-br from-indigo-900/60 to-slate-900/60
                        text-white placeholder-slate-400
                        border border-white/10
                        backdrop-blur-md
                        shadow-inner
                        outline-none
                        resize-none
                        transition-all duration-300

                        focus:border-cyan-400
                        focus:ring-2 focus:ring-cyan-400/30
                        focus:shadow-[0_0_15px_rgba(34,211,238,0.35)]
                        " style={{ width: "50%"}}
                    />
            </div>


            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="
                w-full flex items-center justify-center gap-3
                py-3 rounded-xl
                font-semibold
                bg-gradient-to-r from-cyan-500 to-indigo-500
                text-white
                shadow-lg
                hover:shadow-cyan-500/40
                transition-all duration-300
              "
            >
              <FiSend />
              Send Message
            </motion.button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-cyan-400 mt-4">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
