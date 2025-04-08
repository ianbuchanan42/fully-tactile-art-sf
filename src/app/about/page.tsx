import PageBanner from '@/components/PageBanner';

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
        imageAlt="Various pieces of tactile art by Susan Roemer, Sade' Cole, Diane Komater, Brandon Hodges and Justin Kiene"
        title='About Fully Tactile Art SF'
        subtitle='Our mission to make art accessible through touch'
        align='left'
      />

      <div className='container mx-auto p-4'>
        <section aria-labelledby='mission-heading' className='mb-8'>
          <h2 id='mission-heading' className='text-2xl font-semibold mb-4'>
            Our Mission
          </h2>
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

        <section aria-labelledby='tactile-experience-heading' className='mb-8'>
          <h2
            id='tactile-experience-heading'
            className='text-2xl font-semibold mb-4'
          >
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

        <section aria-labelledby='accessibility-heading' className='mb-8'>
          <h2
            id='accessibility-heading'
            className='text-2xl font-semibold mb-4'
          >
            Accessibility Focus
          </h2>
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

        <section aria-labelledby='who-we-are-heading' className='mb-8'>
          <h2 id='who-we-are-heading' className='text-2xl font-semibold mb-4'>
            Who We Are
          </h2>

          <div className='grid md:grid-cols-3 gap-8 mt-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Ian Buchanan</h3>
              <p className='text-gray-700 mb-3'>
                Co-founder & Executive Director
              </p>
              <p>
                Ian brings his extensive background in accessible design and
                community arts programming to Fully Tactile Art SF. With a
                passion for creating both digital and physical inclusive spaces,
                Ian has led initiatives that bridge the gap between visual art
                and tactile exploration. He has led haptic tours and works as an
                audio describer for theater shows, dance performances and
                documentaries, making visual content accessible to blind and
                low-vision audiences.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Ben Warner</h3>
              <p className='text-gray-700 mb-3'>
                Co-founder & Artistic Director
              </p>
              <p>
                Ben brings a rich background in dance and arts administration to
                Fully Tactile Art SF. A former dancer with Smuin Ballet, Ben
                transitioned into roles that blend artistic direction and
                community engagement. With an M.A. in Arts Administration from
                Goucher College, he combines his experience as a performer,
                teacher, and creative producer to develop tactile art
                experiences that engage all senses and foster deeper connections
                with artistic works.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Jerry Kuns</h3>
              <p className='text-gray-700 mb-3'>
                Program Director & Accessibility Specialist
              </p>
              <p>
                Jerry is an artist, social worker, and educator who has been
                blind most of his life and has lived in San Francisco since
                1964. With a professional background in accessibility and
                adaptive technologies, he has served as a Technology Specialist
                for the California Department of Education and consulted for
                numerous companies developing information access tools. As a
                multifaceted artist himself—performer, woodworker, tactile
                artist, and curator—Jerry brings unique insights to Fully
                Tactile Art SF. He also founded and leads &quot;Jose Can You
                See,&quot; a San Francisco walking tour company, leveraging his
                deep knowledge of the city&apos;s landscape and history.
              </p>
            </div>
          </div>

          <p className='mt-6'>
            Together, our team combines expertise in art, accessibility,
            education, and community engagement to create meaningful tactile art
            experiences that welcome everyone to explore art through touch.
          </p>
        </section>
      </div>
    </>
  );
}
