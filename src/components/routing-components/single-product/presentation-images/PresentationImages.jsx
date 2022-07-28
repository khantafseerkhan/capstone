import { useEffect } from "react";

const PresentationImages = (props) => {

console.log("img    "+props.propductimg)

    let slideIndex = 1;

    useEffect(() => {

      //  showSlides(slideIndex);

    },[])
    
    const plusSlides=(n)=>{
      showSlides(slideIndex += n);
    }
    
    const currentSlide=(n)=> {
      showSlides(slideIndex = n);
    }
    
    const showSlides=(n)=> {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }


    return (

        <div className="aem-Grid aem-Grid--12 ">
            {/* filter section */}
            <div className="aem-GridColumn aem-GridColumn--default--2">
            <div className="img-menu">
                        <ul>
                            <li><img src={props.propductimg} alt="item" /> </li>

                            <li><img src={props.propductimg} alt="item" /> </li>
                            <li><img src={props.propductimg} alt="item" /> </li>
                            <li><img src={props.propductimg} alt="item" /> </li>

                            <li><img src={props.propductimg} alt="item" /> </li>
                        </ul>
                    </div>

            </div>

            <div className="aem-GridColumn aem-GridColumn--default--8 activeImage">
            <img src={props.propductimg} alt="item" />
            </div>
        </div>

    );
}

export default PresentationImages;