import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="text-3xl font-medium text-gray-800">Testimonial</h2>
      <p className="text-sm md:text-base text-gray-500 m-4">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their
        lives.
      </p>
      <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3 p-5">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            className="border border-gray-500/20 rounded-lg overflow-hidden pb-4 max-w-md mx-auto shadow-lg"
            key={index}
          >
            <div className="bg-gray-500/20 flex items-center gap-2 p-2">
              <img
                className="w-15 rounded-full h-15"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="text-gray-800 font-medium text-lg">
                  {testimonial.name}
                </h1>
                <p className="text-sm text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center pt-4 pb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-800/80 text-left">
                {testimonial.feedback}
              </p>
              <a href="">
                <p className="text-blue-500 underline text-sm pt-5 text-left">
                  Read More
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
