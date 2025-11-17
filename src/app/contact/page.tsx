'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-tertiary via-[#f5f0f7] to-[#fff8ed] font-['Poppins'] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondaryopacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 font-['Poppins'] tracking-tight">
            Let's Create Together
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondarymx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out to Choongshin Media Graphics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#8a5a99] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">Email Us</h3>
                    <p className="text-gray-600">info@choongshinmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondaryto-[#ffc04d] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#8a5a99] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Creative Street<br />Design District, CA 90210</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-[#8a5a99] rounded-2xl text-white">
                <p className="text-sm font-medium mb-2">Business Hours</p>
                <p className="text-sm opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm opacity-90">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center animate-bounce-in">
                  <CheckCircle className="text-green-600 mr-3" size={24} />
                  <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondaryfocus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">{errors.name.message}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondaryfocus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">{errors.email.message}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="web-design">Web Design</option>
                    <option value="video-production">Video Production</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondaryfocus:outline-none transition-all duration-300 focus:shadow-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="w-full bg-gradient-to-r from-primary to-[#8a5a99] text-white font-semibold py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-105 active:scale-95"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }

        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}