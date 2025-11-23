"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

interface FormData {
  full_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    async function postData() {
      try {
        const response = await fetch(`${baseURL}api/v1/contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // console.log("Success:", result);
        toast.success(result.message || "Message sent successfully!");
        reset({full_name: '', email: '', phone: '', subject: '', message: ''});
      } catch (error) {
        console.error("Error:", error);
      }
    }
    postData();
    
  };





  return (
    <div className="min-h-screen bg-linear-to-br from-tertiary via-[#f5f0f7] to-[#fff8ed] font-['Poppins'] overflow-hidden">
      {/* Animated background elements */}
      <Toaster />
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 font-['Poppins'] tracking-tight">
            Let's Create Together
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out to Choongshin Media
            Graphics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact Information Card */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-linear-to-br from-primary to-[#8a5a99] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600">info@choongshinmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-linear-to-br from-secondary to-[#ffc04d] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-linear-to-br from-primary to-[#8a5a99] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">
                      Choongshin Craft & Media Pvt. Ltd.
                      <br />
                      Chitwan, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-14 h-14 bg-linear-to-br from-secondary to-[#ffc04d] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 text-sm">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative CTA */}
              <div className="mt-8 p-6 bg-linear-to-r from-primary to-[#8a5a99] rounded-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <div className="relative z-10">
                  <p className="text-lg font-semibold mb-2">
                    🎨 Let's Build Something Amazing
                  </p>
                  <p className="text-sm opacity-90">
                    From concept to creation, we're here to bring your ideas to
                    life
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
              {/* {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center animate-bounce-in">
                  <CheckCircle className="text-green-600 mr-3" size={24} />
                  <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )} */}

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("full_name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="Sitaram"
                  />
                  {errors.full_name && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="sitaram@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                    placeholder="+977 (xxx) xxx-xxxx"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="web-design">Web Design</option>
                    <option value="video-production">Video Production</option>
                    <option value="media-craft">Media & Craft</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 focus:shadow-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 animate-shake">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className=" cursor-pointer relative w-full bg-primary text-white font-semibold py-4 rounded-xl overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center group-hover:text-slate-900 transition-colors duration-300">
                    <span>Send Message</span>
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="w-1/2 bg-secondary  -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-3">
              Find Us Here
            </h2>
            <p className="text-gray-600">
              Visit our studio in the beautiful city of Pokhara
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3976666833623!2d84.43118501104519!3d27.674101576102384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb3baf52b50f%3A0xd3974a8e33fd41ef!2sChoongshin%20Craft%20%26%20Media%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1763361343157!5m2!1sen!2snp"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Info Overlay */}
            <div className="mt-4 p-4 bg-linear-to-r from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    Choongshin Craft & Media Pvt. Ltd.
                  </p>
                  <p className="text-sm text-gray-600">Chitwan, Nepal</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/vqkdbTSs1jTUgRpu9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-secondary text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Directions
              </a>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
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
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
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
