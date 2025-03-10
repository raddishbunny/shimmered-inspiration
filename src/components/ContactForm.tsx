
import { useState } from 'react';
import { toast } from 'sonner';
import { FadeIn } from '@/components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <FadeIn className="glass p-8 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all resize-none duration-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
