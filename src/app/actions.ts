'use server';

// import { redirect } from 'next/navigation';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  // Server-side validation
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'All fields are required',
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Please provide a valid email address',
    };
  }

  // In a real app, you would:
  // 1. Save to database
  // 2. Send confirmation email
  // 3. Log the submission
  // etc.

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: ContactFormData = {
    name,
    email,
    message,
  };

  console.log('Form submission received:', data);

  // In production, this could be saving to a database

  return {
    success: true,
    message: 'Thank you for your message. We will be in touch soon!',
  };
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return {
      success: false,
      message: 'Please provide a valid email address',
    };
  }

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log('Newsletter subscription:', email);

  // Here you would typically:
  // 1. Add email to your mailing list service (Mailchimp, etc.)
  // 2. Add to your database
  // 3. Send welcome email

  return {
    success: true,
    message: 'You have been subscribed to our newsletter!',
  };
}
