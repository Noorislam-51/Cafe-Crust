  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/pagination";
  import { Pagination } from "swiper/modules";

  const testimonials = [
    {
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "John Doe",
      rating: 5,
      feedback: "The service was fantastic, and the staff were incredibly friendly!"
    },
    {
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Jane Smith",
      rating: 4,
      feedback: "I absolutely loved the ambiance and the quality of coffee here."
    },
    {
      img: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "David Wilson",
      rating: 5,
      feedback: "A delightful experience! Highly recommend this place to everyone."
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Sophia Brown",
      rating: 4,
      feedback: "Amazing desserts and great customer service. Will visit again!"
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Michael Johnson",
      rating: 5,
      feedback: "Fantastic coffee and snacks! A must-visit spot in town."
    },
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Mark Robinson",
      rating: 4,
      feedback: "Great coffee options and excellent service! The only thing I'd suggest is a bit more variety in the bakery section."
    },
    {
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Emily Carter",
      rating: 5,
      feedback: "Absolutely love the ambiance and the unique coffee flavors they offer. "
    },
    {
      img: "https://images.pexels.com/photos/3779763/pexels-photo-3779763.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Alex Johnson",
      rating: 4,
      feedback: "A cozy place to relax during my travels. The cappuccino was excellent."
    }
  ];

  const ThirdPage = () => {
    return (
      <div id="app">
         <h4 >welcome</h4>
        <h3 className="menu-title">OUR HAPPY CUSTOMERS</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <h2 className="testimonial-name">{testimonial.name}</h2>
                <p className="testimonial-rating">{"⭐".repeat(testimonial.rating)}</p>
                <p className="testimonial-feedback">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default ThirdPage;
