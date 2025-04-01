import { Testimonial } from '@/types';

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    question: '',
    quote:
      "Being a person who is blind, it's been a very cool multi-sensory experience. It was a magical and transformative experience",
    name: 'Kevin, Arts Patron who is Blind',
  },
  {
    id: 'testimonial-2',
    question: '',
    quote:
      'Wonderful, beyond my wildest expectations. Wonderfully welcoming, full of fun creativity, originality, depth, joy, playfulness. Thoughtful beings behind this. Inspiring takeoff point for the public. Thank you to the volunteers for helpful guidance',
    name: 'Jane, Arts Patron who is Blind',
  },
  {
    id: 'testimonial-3',
    question: '',
    quote:
      "What an amazing experience! It takes the art experience to a whole other level. Thank you for your great vision in putting this show together! Can't wait until the next one!",
    name: 'Evelyn, Arts Patron',
  },
  {
    id: 'testimonial-4',
    question:
      'Do you have a particular memory of this event that you would like to share?',
    quote:
      'I was particularly struck by the excitement and respect from all the attendees. It was lovely to see multiple guide dogs and eager hands ready to gently embrace the beauty.',
    name: 'Participating Artist',
  },
  {
    id: 'testimonial-5',
    question: 'What did this experience mean to you?',
    quote:
      "I got to participate in a community that I otherwise wouldn't have. Non-sighted representation in the visual art world is unsurprisingly low. I didn't know any blind people. People seemed to like what I contributed and I think that's a good thing.",
    name: 'Participating Artist',
  },
  {
    id: 'testimonial-6',
    question: 'Did you learn anything by participating in this exhibition?',
    quote:
      "This exhibition was further proof that there is a huge under-reached population within our communities that would appreciate participating in the experience of art. It seems a little strange that there aren't already more experiences like this, but I can also imagine that there is a lot of art that, of course, simply won't hold up to a lot of touch so well. But the organizers and presenters of the show were amazingly careful and thoughtful about shaping the experience to make it positive for both the audience and artists and protect both.",
    name: 'Participating Artist',
  },
];

// Get a specific testimonial by ID
export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id);
}

// Get a random testimonial
export function getRandomTestimonial(): Testimonial {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  return testimonials[randomIndex];
}
