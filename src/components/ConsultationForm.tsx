import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Select a Service',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (formData.service === 'Select a Service') newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Select a Service',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300 h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm font-bold text-green-700 hover:text-green-800 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-colors ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-red-500 focus:ring-red-500'}`}
            placeholder="John" 
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-colors ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-red-500 focus:ring-red-500'}`}
            placeholder="Doe" 
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-colors ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-red-500 focus:ring-red-500'}`}
          placeholder="john@example.com" 
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
          placeholder="7799045557" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed *</label>
        <select 
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-colors appearance-none ${errors.service ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-red-500 focus:ring-red-500'}`}
        >
          <option disabled>Select a Service</option>
          <option>Patent Filing</option>
          <option>Trademark Registration</option>
          <option>Copyright Protection</option>
          <option>Design Registration</option>
          <option>IP Litigation</option>
          <option>Institutional Partnership</option>
          <option>Other</option>
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.service}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
        <textarea 
          rows={4} 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-colors ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-red-500 focus:ring-red-500'}`}
          placeholder="Tell us about your requirements..."
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.message}</p>}
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors mt-4 shadow-lg shadow-red-500/20 flex items-center justify-center">
        Send Message <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </form>
  );
}
