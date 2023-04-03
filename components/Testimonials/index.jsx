import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Music Blogger",
    content: "As a music blogger, I come across a lot of new artists and labels, but this one really stood out to me. Their artist has a unique voice that draws you in and the production is top-notch. I can see this label becoming a major player in the industry, and I'm excited to see what they come up with next.",
    image: "/images/testimonials/sarah-johnson.png",
    star: 4
    },
    
    {
    id: 2,
    name: "Michael Lee",
    designation: "Music Producer",
    content: "I've had the pleasure of working with this label's artist, and I have to say, they're a true talent. The label has done an excellent job of promoting and supporting their artist, and it shows in the quality of their music. I highly recommend this label to anyone looking for fresh and exciting new talent.",
    image: "/images/testimonials/michael-lee.png",
    star: 5
    },
    
    {
    id: 3,
    name: "Andy Ford",
    designation: "Music Critic",
    content: "I've been following this label's artist for a while now, and I have to say, they just keep getting better and better. The label has done an excellent job of cultivating their artist's unique sound. I highly recommend giving this label a listen if you're looking for something fresh and innovative.",
    image: "/images/testimonials/andy-ford.png",
    star: 4
    }
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] pt-16 md:pt-20 lg:pt-28">
      <div className="container wow fadeInUp rounded-md bg-gray !bg-opacity-70 py-11 px-8 dark:bg-black dark:!bg-opacity-70 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
        <SectionTitle
          title="What Our Listeners Says"
          paragraph="Here are some of the reviews from our listeners."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
