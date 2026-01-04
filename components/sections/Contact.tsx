export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <form className="max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border"
          rows={5}
        />
        <button className="px-6 py-3 bg-dark text-light">Send Message</button>
      </form>
    </section>
  );
}
