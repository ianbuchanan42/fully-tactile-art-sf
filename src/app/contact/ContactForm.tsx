'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormStatus({
        success: true,
        message:
          'Form submissions are temporarily disabled. Please email us directly at info@fullytactileartf.org',
      });
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className='bg-gray-50 p-6 rounded-lg'>
      <div className='mb-4 p-3 rounded bg-yellow-100 text-yellow-800'>
        Note: Our contact form is currently under maintenance. Please email us
        directly at{' '}
        <a href='mailto:info@fullytactileartf.org' className='underline'>
          info@fullytactileartf.org
        </a>
      </div>

      {formStatus.message && (
        <div
          className={`mb-4 p-3 rounded ${
            formStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block mb-1 font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div>
          <label htmlFor='email' className='block mb-1 font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div>
          <label htmlFor='message' className='block mb-1 font-medium'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
