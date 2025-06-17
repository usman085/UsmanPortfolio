"use client";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { socialLinks } from '../utils/data';
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the form data to your backend
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      reset();
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container">
        <h2 className="heading-2 text-center mb-12 animate-fade-in text-[#0EB55F]">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="heading-3 mb-4 text-[#0EB55F]">Let&apos;s Connect</h3>
            <p className="text-[#1E1E1E] mb-8">
              I&apos;m currently available for freelance work or full-time positions. If you&apos;re interested in working together, please don&apos;t hesitate to reach out.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = {
                  FaLinkedin,
                  FaGithub,
                  FaTwitter,
                }[link.icon] as IconType;

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#1E1E1E] hover:text-[#0EB55F] transition-all hover:translate-x-1"
                  >
                    <Icon className="text-xl" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 animate-slide-in-right bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#0EB55F]/10"
          >
            {isSuccess && (
              <div className="bg-[#0EB55F]/10 text-[#0EB55F] p-4 rounded-lg animate-fade-in">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1E1E1E]">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#0EB55F]/20 focus:outline-none focus:border-[#0EB55F] transition-transform focus:scale-[1.02]"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1E1E1E]">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#0EB55F]/20 focus:outline-none focus:border-[#0EB55F] transition-transform focus:scale-[1.02]"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1E1E1E]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#0EB55F]/20 focus:outline-none focus:border-[#0EB55F] transition-transform focus:scale-[1.02]"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 font-semibold bg-[#0EB55F] text-white rounded-lg shadow-lg hover:shadow-[#0EB55F]/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 relative"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 