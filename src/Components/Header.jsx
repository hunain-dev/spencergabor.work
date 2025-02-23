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
            <div key={index} className="end">
              <div className="icon">
                  <img src={elem.icon} alt="" />
  
              </div>
            
            </div>
          </>
        ))}
      </div>
    );
  };
  
  export default Header;
  