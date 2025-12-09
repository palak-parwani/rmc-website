import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing work! The team delivered my house before time with excellent finishing and great transparency throughout the project.",
    rating: 5,
    img: "/images/profile.jpg",
  },
  {
    name: "Priya Mehta",
    review:
      "Very professional and committed team. They handled everything smoothly from planning to final delivery. Highly recommended!",
    rating: 5,
    img: "/images/profile.jpg",
  },
  {
    name: "Amit Verma",
    review:
      "Quality construction work with modern design ideas. The team truly understood my vision and executed it beautifully.",
    rating: 4,
    img: "/images/profile.jpg",
  },
  {
    name: "Sonal Gupta",
    review:
      "They renovated my home so well! Smooth execution, timely work, and a polite, professional team. Loved the results.",
    rating: 5,
    img: "/images/profile.jpg",
  },
  {
    name: "Arjun Patel",
    review:
      "Affordable pricing, great teamwork, and impressive results. I am extremely satisfied with their construction service.",
    rating: 4,
    img: "/images/profile.jpg",
  },
];

export default function Testimonials() {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="standard-padding">
      <div className="container">
        <h2 className={`heading2 text-center mb-4 ${styles.heading}`}>
          What Our Clients Say
        </h2>

        <Slider {...settings} className={styles.sliderWrapper}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.cardWrapper}>
              <div className={styles.card}>
                {/* Profile Row */}
                <div className={styles.profileRow}>
                  <img src={r.img} className={styles.avatar} />
                  <div>
                    <h5 className={styles.name}>{r.name}</h5>

                    {/* Rating Stars */}
                    <div className={styles.stars}>
                      {Array(r.rating)
                        .fill(0)
                        .map((_, idx) => (
                          <FaStar key={idx} className={styles.starIcon} />
                        ))}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className={styles.review}>{r.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
