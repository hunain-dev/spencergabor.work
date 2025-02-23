import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Make sure to import Swiper styles

const Featuredwork = () => {
  const obj = [
    {
      img: "https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500",
      button: "Shakes shack",
    },
    {
      video:
        "https://cdn.prod.website-files.com/678b6504163867089763e0b9%2F6793c86561554aef8d19e58e_Traffbraza-transcode.mp4",
      button: "Jaffa",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/60490b680a879a0d5aa4da2b/1627328289847-1KOLORL6O9NFWJYA4OVJ/tf4n4btfhuw51.png?format=1500w    ",
      button: "View Project",
    },
    {
        img: " https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=400&h=400    ",
        button: "Cuifled cup",
      },
      {
        img: "https://cdn.sanity.io/images/3vte03iz/production/0045c4a002b1545841387859bc3819f140227548-2559x2559.gif?auto=format&w=600&h=600  ",
        button: "Frug",
      },   
         {
        img: "https://cdn.sanity.io/images/3vte03iz/production/ddb1ff83a6896af9f812222294df8dd3eac419cc-2266x2264.png?auto=format&w=600&h=600 ",
        button: "Brompion ",
      },

  ];

  return (
    <div className="Featuredwork">
      <div className="Featuredworktop">
            <h1>Featured Work</h1>
            <h5>Select recent and notable projects</h5>
      </div>
      <div className="Featuredbottom">
        <Swiper watchSlidesProgress={true} slidesPerView={3} spaceBetween={20} className="mySwiper">
          {obj.map((elem, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <div className="imagesection">
                  {elem.img ? <img src={elem.img} alt="Project" /> : null}
                  {elem.video ? (
                    <video autoPlay loop muted>
                      <source src={elem.video} type="video/mp4" />
                    </video>
                  ) : null}
                </div>
                <button>{elem.button}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featuredwork;
