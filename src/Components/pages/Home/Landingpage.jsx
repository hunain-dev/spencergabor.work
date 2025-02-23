import img1 from "/src/assets/images/landigpage1 (1).png";
import img2 from "/src/assets/images/landigpage1 (2).png";
import img3 from "/src/assets/images/landigpage1 (3).png";
import img4 from "/src/assets/images/landigpage1 (4).png";

const Landingpage = () => {
  const obj = [
    {
      h1: "Spencer Gabor",
      img: [img1, img2, img3, img4],
      h2: "Illustrator,",
      h3: "designer & muralist",
      h4: "Brooklyn, New York",
      h5: "spancergambongmail.com",


    }
  ];

  return (
    obj.map((elem, index) => (
      <div key={index} className="Landingpage">
        <div className="landingpageup">
          <h3>{elem.h4}</h3>
          <h6>{elem.h5}</h6>


        </div>
        <div className="Landingpagetop">
          <h1>{elem.h1}</h1>
        </div> 
        <div className="Landingpagebottom">
          {elem.img.map((image, imgIndex) => (
            <img key={imgIndex} src={image} alt={`Image ${imgIndex + 1}`} />
          ))}
        </div>
        <div className="Landingpageend">
        <h2>{elem.h2}</h2>
        <h3>{elem.h3}</h3>

        </div>
      </div>
    ))
  );
};

export default Landingpage;
