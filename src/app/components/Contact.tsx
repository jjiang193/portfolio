"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Here you would typically integrate with an email service like EmailJS
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <div className="text-center mb-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
      </div>
      
      <div
        className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <div className="h-full w-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="mb-6">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <span>🐙</span>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <span>🔗</span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <span>🐦</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact"); 