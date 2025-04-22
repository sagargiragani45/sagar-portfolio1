import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { data } = await axios.post('/api/contact', formData);
      setSubmitMessage(data.message || 'Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage(error.response?.data?.message || 'There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Inline the handleChange functionality directly in the inputs
  return (
    <section className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="bg-gray-800 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
              {submitMessage}
            </p>
          )}
        </form>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
          <p className="mb-2">Email: <a href="mailto:sagargoud2606@gmail.com" className="text-blue-400">sagargoud2606@gmail.com</a></p>
          <p>Phone: <a href="tel:+916301758608" className="text-blue-400">+91 6301758608</a></p>
        </div>
      </div>
    </section>
  );
}