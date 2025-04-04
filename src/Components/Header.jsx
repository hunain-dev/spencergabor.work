import { Link } from "react-router-dom";

const Header = () => {
    const obj = [
      {
           icon: `/src/assets/images/man.png`,

        
      },
      
    ];
    return (
      <div className="Header">
        {obj.map((elem, index) => (
          <>
          <div className="left">
        <Link to={'/'}> <h1>Spancer-gabor </h1></Link>   
          </div>
            <div key={index} className="end">
              <div className="icon">
              <Link to={'/Aboutus'}><img src={elem.icon} alt="" /></Link>  
              </div>              
            </div>
          </>
        ))}
      </div>
    );
  };
  
  export default Header;
  