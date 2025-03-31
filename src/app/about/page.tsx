import PageBanner from '../components/PageBanner';

export const metadata = {
  title: 'About Us | Fully Tactile Art SF',
  description:
    'Learn about Fully Tactile Art SF, our mission, and our commitment to accessible tactile art experiences.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        imagePath='/images/banners/about-banner.jpg'
        imageAlt='Touch-based art installation at Fully Tactile Art SF'
        title='About Fully Tactile Art SF'
        subtitle='Our mission to make art accessible through touch'
        align='left'
      />

      <div className='container mx-auto p-4'>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
          <p className='mb-4'>
            Fully Tactile Art SF is dedicated to expanding the boundaries of art
            by creating free public art spaces rooted in the sensation of touch.
            We believe that art should be accessible to everyone, including
            those with visual impairments.
          </p>
          <p>
            Our exhibitions and events showcase works that not only invite
            viewers to experience art through touch, but encourages them,
            challenging the traditional &quot;do not touch&quot; museum
            experience.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Tactile Art Experience
          </h2>
          <p className='mb-4'>
            Tactile art creates a multi-sensory experience that can deepen our
            connection with artistic works. By incorporating texture, dimension,
            and interactive elements, tactile art opens up new possibilities for
            artistic expression and appreciation.
          </p>
          <p>
            Our organization works with artists who specifically create pieces
            meant to be touched, felt, and physically explored.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Accessibility Focus</h2>
          <p className='mb-4'>
            We are committed to making art accessible to people of all
            abilities. Our events feature tactile elements, audio descriptions,
            and other accommodations to ensure that everyone can engage with the
            art.
          </p>
          <p>
            We collaborate with organizations serving the visually impaired
            community to continually improve our accessibility practices.
          </p>
        </section>
      </div>
    </>
  );
}
