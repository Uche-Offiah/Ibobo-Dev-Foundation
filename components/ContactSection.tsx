export default function ContactSection() {
    return (
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg min-h-[600px]">
          <h2 className="text-center mb-5 font-semibold text-3xl sm:text-4xl md:text-[4.5rem] font-playfair">
            GET IN TOUCH
          </h2>
          <form className="flex flex-col space-y-6 max-w-2xl mx-auto">
            <label className="flex flex-col">
              <span className="text-lg mb-2">Email Address</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
  
            <label className="flex flex-col">
              <span className="text-lg mb-2">Your Message</span>
              <textarea
                required
                placeholder="Type your message here..."
                className="p-3 h-40 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </label>
  
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }  