"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Home/footer";

const ease = [0.22, 1, 0.36, 1];

const contactEmail = "jk.buildsweb@gmail.com";

const projectTypes = [
  "Web App",
  "Full-Stack Product",
  "AI Feature",
  "Real-Time System",
  "Something else",
];

const MAX_MESSAGE = 500;

/* ============================================================
   FIELD COMPONENT
============================================================ */

const Field = ({
  id,
  label,
  type = "text",
  multiline = false,
  value,
  onChange,
  error,
  disabled = false,
}) => {
  const Tag = multiline ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder=" "
        className={`peer w-full rounded-2xl border bg-[#0F1D18]/[0.04] px-4 pb-2.5 pt-6 text-[15px] text-[#0F1D18] outline-none transition-all duration-300 placeholder-transparent disabled:cursor-not-allowed disabled:opacity-60 ${
          multiline ? "resize-none" : ""
        } ${
          error
            ? "border-red-500/70 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-[#0F1D18]/12 focus:border-[#8A6A28] focus:bg-white/70 focus:ring-4 focus:ring-[#C9A55C]/25"
        }`}
      />

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-4 text-[15px] transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium ${
          error
            ? "text-red-500"
            : "text-[#0F1D18]/50 peer-focus:text-[#8A6A28]"
        }`}
      >
        {label}
      </label>

      {error && (
        <p className="mt-1.5 pl-1 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

/* ============================================================
   CONTACT
============================================================ */

const MainContactComponent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedTypes, setSelectedTypes] = useState([]);

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("idle");
  // idle | sending | success

  const [submitError, setSubmitError] = useState("");

  /* ============================================================
     UPDATE FORM
  ============================================================ */

  const update = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove the error for this field as soon as user edits it
    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    // Remove API error when user starts editing again
    if (submitError) {
      setSubmitError("");
    }
  };

  /* ============================================================
     TOGGLE PROJECT TYPE
  ============================================================ */

  const toggleType = (type) => {
    setSelectedTypes((previous) =>
      previous.includes(type)
        ? previous.filter((item) => item !== type)
        : [...previous, type]
    );

    if (submitError) {
      setSubmitError("");
    }
  };

  /* ============================================================
     VALIDATION
  ============================================================ */

  const validate = () => {
    const newErrors = {};

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    /* Name */

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 80) {
      newErrors.name = "Name must be less than 80 characters.";
    }

    /* Email */

    if (!trimmedEmail) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    /* Message */

    if (!trimmedMessage) {
      newErrors.message = "Please tell me a little about your project.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (trimmedMessage.length > MAX_MESSAGE) {
      newErrors.message = `Message cannot exceed ${MAX_MESSAGE} characters.`;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ============================================================
     SUBMIT
  ============================================================ */

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent duplicate submissions
    if (status === "sending") {
      return;
    }

    setSubmitError("");

    // Validate before sending
    const isValid = validate();

    if (!isValid) {
      return;
    }

    setStatus("sending");

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error(
          "Web3Forms access key is missing."
        );
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,

            name: form.name.trim(),

            email: form.email.trim(),

            subject: `New portfolio inquiry from ${form.name.trim()}`,

            message: form.message.trim(),

            project_type:
              selectedTypes.length > 0
                ? selectedTypes.join(", ")
                : "Not specified",

            from_name: "Jawad Khan Portfolio",

            replyto: form.email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Something went wrong while sending your message."
        );
      }

      /* ========================================================
         SUCCESS
      ======================================================== */

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setSelectedTypes([]);

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("idle");

      setSubmitError(
        error.message ||
          "Unable to send your message right now. Please try again."
      );
    }
  };

  /* ============================================================
     RESET AFTER SUCCESS
  ============================================================ */

  const reset = () => {
    setStatus("idle");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setSelectedTypes([]);

    setErrors({});

    setSubmitError("");
  };

  /* ============================================================
     MESSAGE KEYBOARD HANDLER
  ============================================================ */

  const handleMessageKeyDown = (event) => {
    if (
      form.message.length >= MAX_MESSAGE &&
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      event.key !== "Tab"
    ) {
      event.preventDefault();
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F1D18] pb-10 pt-28 text-[#EFE8D8] lg:pt-32">
    

      {/* ========================================================
          AMBIENT BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#C9A55C]/[0.14] blur-[150px]" />

        <div className="absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-[#2F6B55]/30 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EFE8D8 1px, transparent 1px), linear-gradient(to bottom, #EFE8D8 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          }}
        />
      </div>

      {/* ========================================================
          MAIN
      ======================================================== */}

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-5 sm:px-8 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-12">
        {/* ======================================================
            LEFT — INTRO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Label + availability */}

          <div className="mb-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A55C] sm:w-12" />

              <span className="text-[11px] font-medium tracking-[0.18em] text-[#C9A55C] sm:text-xs">
                Contact
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] tracking-[0.08em] text-[#EFE8D8]/75 sm:text-xs">
                Open to new projects
              </span>
            </div>
          </div>

          {/* Heading */}

          <h1 className="font-serif text-[clamp(2.3rem,4.6vw,4.2rem)] font-normal leading-[1.02] tracking-[-0.035em]">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#E9C77F] via-[#C9A55C] to-[#9C7A35] bg-clip-text italic text-transparent">
              that matters.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-5 hidden max-w-md text-[15px] leading-7 text-[#EFE8D8]/65 sm:block sm:text-base">
            Have an idea, a problem, or a product in mind? Tell me a little
            about it and let&apos;s turn it into a digital solution that works.
          </p>

          {/* Contact details */}

          <div className="mt-6 flex flex-col gap-3 sm:mt-8">
            {/* Email */}

            <a
              href={`mailto:${contactEmail}`}
              className="group flex w-fit items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] text-[#C9A55C] transition-all duration-300 group-hover:border-[#C9A55C] group-hover:bg-[#C9A55C] group-hover:text-[#0F1D18]">
                <Mail size={16} strokeWidth={1.7} />
              </span>

              <span className="text-sm text-[#EFE8D8]/80 transition-colors duration-300 group-hover:text-[#E9C77F]">
                {contactEmail}
              </span>
            </a>

            {/* Location */}

            <div className="flex w-fit items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] text-[#C9A55C]">
                <MapPin size={16} strokeWidth={1.7} />
              </span>

              <span className="text-sm text-[#EFE8D8]/80">
                Based in Pakistan
              </span>
            </div>
          </div>
        </motion.div>

        {/* ======================================================
            RIGHT — FORM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative"
        >
          {/* Offset gold outline */}

          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[28px] border border-[#C9A55C]/40 sm:translate-x-4 sm:translate-y-4" />

          {/* ====================================================
              FORM CARD
          ==================================================== */}

          <div className="relative overflow-hidden rounded-[28px] bg-[#F8F3E8] p-5 text-[#0F1D18] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-[#EFE8D8]/10 sm:p-7 lg:min-h-[520px]">
            {/* Card glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#C9A55C]/25 blur-[80px]" />

            <AnimatePresence mode="wait">
              {/* ==================================================
                  SUCCESS STATE
              ================================================== */}

              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative flex min-h-[470px] flex-col items-center justify-center text-center"
                >
                  {/* Success icon */}

                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.55,
                      ease,
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0F1D18] text-[#C9A55C] shadow-[0_20px_50px_-15px_rgba(15,29,24,0.5)]"
                  >
                    <Check size={34} strokeWidth={1.8} />
                  </motion.div>

                  <h2 className="mt-7 font-serif text-3xl tracking-[-0.03em]">
                    Message sent.
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#0F1D18]/60">
                    Thank you for reaching out. I&apos;ve received your
                    message and will get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 rounded-full border border-[#0F1D18]/15 px-5 py-2.5 text-sm font-medium text-[#0F1D18] transition-all duration-300 hover:border-[#C9A55C] hover:bg-[#C9A55C]/10"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ==================================================
                   FORM STATE
                ================================================== */

                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="relative flex flex-col gap-4"
                  noValidate
                >
                  {/* Form heading */}

                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-[22px] leading-none tracking-[-0.02em] sm:text-[26px]">
                      Tell me about your{" "}
                      <span className="italic text-[#8A6A28]">
                        project
                      </span>
                    </h2>

                    <span className="hidden text-xs text-[#0F1D18]/50 sm:block">
                      Takes 1 minute
                    </span>
                  </div>

                  {/* Name + Email */}

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Your name"
                      value={form.name}
                      onChange={(event) =>
                        update("name", event.target.value)
                      }
                      error={errors.name}
                      disabled={status === "sending"}
                    />

                    <Field
                      id="email"
                      label="Email address"
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        update("email", event.target.value)
                      }
                      error={errors.email}
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Project types */}

                  <div>
                    <p className="mb-2 pl-1 text-xs font-medium tracking-[0.06em] text-[#0F1D18]/60">
                      What do you need?{" "}
                      <span className="font-normal text-[#0F1D18]/40">
                        (optional)
                      </span>
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected =
                          selectedTypes.includes(type);

                        return (
                          <button
                            key={type}
                            type="button"
                            disabled={status === "sending"}
                            onClick={() => toggleType(type)}
                            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                              isSelected
                                ? "border-[#0F1D18] bg-[#0F1D18] text-[#E9C77F]"
                                : "border-[#0F1D18]/15 bg-[#0F1D18]/[0.03] text-[#0F1D18]/70 hover:border-[#0F1D18]/30 hover:bg-[#0F1D18]/[0.07]"
                            }`}
                          >
                            {isSelected && (
                              <Check
                                size={14}
                                strokeWidth={2.2}
                              />
                            )}

                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}

                  <Field
                    id="message"
                    label="Tell me about your idea"
                    multiline
                    value={form.message}
                    onChange={(event) =>
                      update(
                        "message",
                        event.target.value.slice(0, MAX_MESSAGE)
                      )
                    }
                    onKeyDown={handleMessageKeyDown}
                    error={errors.message}
                    disabled={status === "sending"}
                  />

                  {/* Character count */}

                  <p className="mt-[-8px] pr-1 text-right text-[11px] tabular-nums text-[#0F1D18]/40">
                    {form.message.length}/{MAX_MESSAGE}
                  </p>

                  {/* API Error */}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-xs leading-5 text-red-600"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {/* Bottom row */}

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="hidden text-xs text-[#0F1D18]/45 sm:block">
                      Tell me as much as you&apos;d like.
                    </span>

                    {/* Submit button */}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group flex w-full items-center justify-between gap-3 rounded-full bg-[#0F1D18] py-2 pl-7 pr-2 text-sm font-medium text-[#EFE8D8] shadow-[0_14px_40px_-14px_rgba(15,29,24,0.8)] transition-all duration-300 hover:bg-[#1A2D26] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:justify-start"
                    >
                      <span>
                        {status === "sending"
                          ? "Sending..."
                          : "Send message"}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A55C] text-[#0F1D18] transition-transform duration-300 group-hover:rotate-45 group-disabled:rotate-0">
                        {status === "sending" ? (
                          <Loader2
                            size={18}
                            strokeWidth={2}
                            className="animate-spin"
                          />
                        ) : (
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.8}
                          />
                        )}
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      
    </main>
  );
};

export default MainContactComponent