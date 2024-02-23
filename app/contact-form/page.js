"use client";

import React from "react";

const ContactForm = () => {
  const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

  async function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    try {
      if (form.action !== SUBMIT_URL) {
        alert("Incorrect form action value");
        return;
      }

      if (form.method.toLowerCase() !== "post") {
        alert("Incorrect form method value");
        return;
      }

      const formData = new FormData(form);
      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const text = await response.text();
      alert(text);
    } catch (_) {
      alert("Error submitting form!");
    }
  }

  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action={SUBMIT_URL}
      method="post"
      onSubmit={submitForm}
      className="flex w-36 flex-col gap-2"
    >
      <input id="name" name="name" type="text" />
      <input id="email" name="email" type="email" />
      <textarea id="message" name="message" />
      <button>submit</button>
    </form>
  );
};

export default ContactForm;
