import { FormEvent, useState } from "react";
import ActionBtn from "../components/btns/ActionBtn";
import PageTitle from "../components/common/PageTitle";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import axios_common from "../utils/axios_common";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios_common.post("/contact", { name, email, subject, message });
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageTitle title="Contact" />
      <section className="container py-8">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d59108.94398784701!2d90.33720695000001!3d22.19036035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1731913301317!5m2!1sen!2sbd"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className="w-full min-h-80 mb-5"
        ></iframe>

        {/* Heading */}
        <h1 className="mt-3.5 mb-5 text-4xl tracking-wider font-medium">Get In Touch</h1>

        {/* Form and Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <form
            className="md:col-span-2 grid grid-cols-2 gap-4"
            onSubmit={handleContact}
          >
            {/* Name */}
            <div className="col-span-2 md:col-span-1 space-y-1.5">
              <label htmlFor="name" className="block text-lg font-medium opacity-75">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full pl-5 py-2.5 outline-none border rounded-sm"
                type="text"
              />
            </div>

            {/* Email */}
            <div className="col-span-2 md:col-span-1 space-y-1.5">
              <label htmlFor="email" className="bloc text-lgm font-mediumopacity-75">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full pl-5 py-2.5 outline-none border rounded-sm"
                type="email"
              />
            </div>

            {/* Subject */}
            <div className="col-span-2 space-y-1.5">
              <label htmlFor="subject" className="bl text-lg-sm font-mediopacity-75">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Enter subject"
                className="w-full pl-5 py-2.5 outline-none border rounded-sm"
                type="text"
              />
            </div>

            {/* Message */}
            <div className="col-span-2 space-y-1.5">
              <label htmlFor="message" className="bl text-lg-sm font-mediopacity-75">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full pl-5 py-2.5 outline-none border rounded-sm"
                rows={6}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="h-14 col-span-2">
              <ActionBtn className="h-12 w-full" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </ActionBtn>
            </div>
          </form>

          {/* Cards */}
          <div className="space-y-5">
            {/* Card 1 */}
            <div className="flex items-center gap-x-3.5 tracking-widest">
              <CiPhone className="text-5xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-sm text-gray-600">+880-1234-567890</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-x-3.5 tracking-widest">
              <CiMail className="text-5xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-sm text-gray-600">contact@example.com</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-x-3.5 tracking-widest">
              <CiLocationOn className="text-5xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
