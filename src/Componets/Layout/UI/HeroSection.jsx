import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroSection=()=>{
return(
     <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Lorem ipsum, dolor sit amet consectetur 
          </h1>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit modi
            dolores earum deleniti consequatur voluptatibus culpa! Culpa
            dignissimos voluptate quo voluptatibus, illum quod?
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
            <img src="/images/world.png" alt="world "  className="banner-image"/>
        </div>
      </div>
    </main>
)

    
}