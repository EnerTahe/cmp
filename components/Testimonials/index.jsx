import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Suvaline Ment",
    designation: "Täiskohaga kukk",
    content:
      "Ei tümakas on norm.",
    image: "/images/testimonials/ment.png",
    star: 5,
  },
  {
    id: 2,
    name: "Malle Maalt",
    designation: "Kaevur",
    content:
      "Veits kuulan ikka ja.",
    image: "/images/testimonials/neiu.png",
    star: 4,
  },
  {
    id: 3,
    name: "Hood Gangster",
    designation: "Töötu",
    content:
      "Täielik saast pange kinni.",
    image: "/images/testimonials/gangster.png",
    star: 1,
  },
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
