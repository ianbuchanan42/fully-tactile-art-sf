import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Fully Tactile Art SF',
  description:
    'Get in touch with Fully Tactile Art SF about our exhibitions, events, or tactile art inquiries.',
};

export default function ContactPage() {
  return (
    <div className='container mx-auto p-4'>
      <header>
        <h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
      </header>

      <main>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <section className='mb-8' aria-labelledby='get-in-touch-heading'>
              <h2
                id='get-in-touch-heading'
                className='text-2xl font-semibold mb-4'
              >
                Get In Touch
              </h2>
              <p className='mb-4'>
                We&apos;d love to hear from you! Whether you&apos;re an artist
                interested in participating in our exhibitions, a visitor with
                questions, or someone who wants to learn more about tactile art,
                please feel free to reach out.
              </p>
              <p>
                Your messages help us improve our events and create better
                experiences for everyone.
              </p>
            </section>

            <section aria-labelledby='visit-us-heading'>
              <h2 id='visit-us-heading' className='text-2xl font-semibold mb-4'>
                Visit Us
              </h2>
              <address className='not-italic'>
                <p className='mb-2'>
                  <strong>Jettison Creative</strong>
                  <br />
                  47 Jeff Adachi Way
                  <br />
                  San Francisco, CA 94111
                </p>
                <p className='mb-4'>
                  <strong>Open during exhibitions only</strong>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href='mailto:info@fullytactileartf.org'
                    className='text-blue-500 hover:underline'
                  >
                    info@fullytactileartf.org
                  </a>
                </p>
              </address>
            </section>
          </div>

          <div>
            <section aria-labelledby='contact-form-heading'>
              <h2
                id='contact-form-heading'
                className='text-2xl font-semibold mb-4'
              >
                Send Us a Message
              </h2>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
