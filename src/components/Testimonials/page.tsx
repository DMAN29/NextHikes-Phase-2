import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    id: 1,
    name: "Esther Howard",
    title: "Co-Founder of SaaSWave",
    image: "/images/testimonial1.jpg",
    feedback: "Amazing experience, truly professional service.",
  },
  {
    id: 2,
    name: "Cody Fisher",
    title: "CTO of FinSuite",
    image: "/images/testimonial2.jpg",
    feedback: "Their work ethics are remarkable and results-driven.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    title: "Head HR at TechNify",
    image: "/images/testimonial3.jpg",
    feedback: "Highly recommended for anyone seeking top talent.",
  },
  {
    id: 4,
    name: "Albert Flores",
    title: "Product Manager",
    image: "/images/testimonial4.jpg",
    feedback: "They exceeded our expectations in every way.",
  },
  {
    id: 5,
    name: "Darlene Robertson",
    title: "Marketing Lead",
    image: "/images/testimonial5.jpg",
    feedback: "Creative team with a commitment to excellence.",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    title: "CEO at DevHub",
    image: "/images/testimonial6.jpg",
    feedback: "A seamless collaboration from start to finish.",
  },
];

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    partialVisibilityGutter: 0, // disables partial peeking
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 900, min: 640 },
    items: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    title: string;
    image: string;
    feedback: string;
  };
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => (
  <div
    className={`
      flex flex-col items-center justify-center rounded-2xl
      shadow-xl bg-white m-4 px-6 py-8 transition-transform duration-500
      ${
        isActive
          ? "scale-110 z-20 shadow-2xl border-2 border-orange-200"
          : "scale-90 opacity-80 z-10"
      }
    `}
    style={{ minHeight: 410, maxWidth: 340, minWidth: 250 }}
  >
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-32 h-32 object-cover rounded-xl mb-4"
      draggable={false}
    />
    <div className="font-bold text-lg">{testimonial.name}</div>
    <div className="text-sm text-gray-500 mb-2">{testimonial.title}</div>
    <div className="text-gray-700 text-center text-base">
      {testimonial.feedback}
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  // react-multi-carousel's beforeChange passes (previous, next)
  const handleBeforeChange = (nextSlide: number, state: any) => {
    setCurrentSlide(nextSlide);
  };

  // For 3 items shown, center is idx = (currentSlide + 1) % length
  const getActiveIndex = (idx: number) => {
    return idx === (currentSlide + 1) % testimonials.length;
  };

  // Calculate max width: 3 * (card maxWidth + margin)
  // Card maxWidth = 340, margin m-4 in Tailwind = 1rem = 16px x 2 (left+right) = 32px per card
  // Total: 3 * (340 + 32) = 1116px

  return (
    <section className="py-16 bg-gradient-to-r from-white to-orange-100">
      <div className="max-w-4xl mx-auto mb-7">
        <h1 className="text-2xl md:text-5xl xl:text-7xl font-semibold leading-relaxed text-center">
          Featured Testimonials
        </h1>
        <p className="lg:text-2xl gap-5 text-gray-700 text-center">
          Presenting our recent feedbacks — Have a look!
        </p>
      </div>
      <div className="max-w-[1116px] mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3500}
          centerMode={false} // disables peeking at the sides
          beforeChange={handleBeforeChange}
          containerClass="carousel-container"
          itemClass="flex justify-center"
          arrows={false}
          renderDotsOutside
          customTransition="transform 500ms cubic-bezier(.77,0,.18,1)"
          slidesToSlide={1}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={getActiveIndex(idx)}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
