import React, { useState } from "react";
import Input from "./Form/Input";
  const contact_info = [
    { logo: "mail", text: "rahul@email.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "demo location",
    },
  ];
export default function Contact ()  {
  const [name, setName] = useState(),
    [email, setEmail] = useState(),
    [message, setMessage] = useState();


  const Inputs = [
    {
      type: "text",
      placeholder: "Your Name",
      state: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      type: "email",
      placeholder: "Your Email Address",
      state: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  return (
    <section
      id="contact"
      className="px-3 py-10 text-white border border-t-tertiary"
    >
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-secondary">Get in touch</p>

        <div className="flex flex-col max-w-5xl gap-6 p-2 mx-auto mt-16 bg-gray-800 rounded-lg md:flex-row md:p-6">
          <form className="flex flex-col flex-1 gap-5">
            {Inputs.map((input) => (
              <Input
                key={input.placeholder}
                type={input.type}
                placeholder={input.placeholder}
                state={input.state}
                onChange={input.onChange}
              />
            ))}
            <textarea
              className="p-3 bg-gray-700 rounded-lg outline-none"
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row flex-wrap items-center gap-4 text-left"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm break-words md:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 