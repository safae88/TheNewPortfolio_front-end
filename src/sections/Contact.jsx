 import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import MagneticButton from "../components/ui/MagneticButton";
import SectionHeading from "../components/ui/SectionHeading";
import SocialLinks from "../components/ui/SocialLinks";
import { fadeUp, staggerContainer } from "../hooks/animations";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        `Error: ${
          error?.text || error?.message || "Failed to send the message."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something exceptional"
            description="Have a project in mind or want to collaborate? I'd love to hear from you."
            dark
          />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.15em] text-neutral-500">
                Social
              </p>
              <SocialLinks links={profile.socials} />
            </div>

            <MagneticButton
              href={`mailto:${profile.email}`}
              variant="secondary"
              className="border-neutral-700! bg-transparent! text-white! hover:border-white!"
            >
              Send an Email
              <ArrowUpRight size={16} />
            </MagneticButton>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="rounded-4xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm md:p-10"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-neutral-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition-colors focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-neutral-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition-colors focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-neutral-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition-colors focus:border-white"
                />
              </div>
            </div>

            <MagneticButton
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-white! text-neutral-950! hover:bg-neutral-200!"
            >
              {loading
                ? "Sending..."
                : sent
                ? "Message Sent!"
                : "Send Message"}

              <Send size={16} />
            </MagneticButton>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}