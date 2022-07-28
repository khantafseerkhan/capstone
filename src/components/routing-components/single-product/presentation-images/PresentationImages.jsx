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

       <>
        <div className="aem-Grid aem-Grid--12 tablet-hide phone-hide">
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

<div className="aem-Grid aem-Grid--12 tab-show phone-show">
<div className="aem-GridColumn aem-GridColumn--default--12 ">

    <div className="slideshow-container">

        <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={props.propductimg} style={{width:"100%"}} alt="item"/>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src={props.propductimg} style={{width:"100%"}} alt="item"/>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src={props.propductimg} style={{width:"100%"}} alt="item"/>
        </div>

        <a role='button' aria-label='Left' href="javascript:void(0)" className="prev" onclick={()=>plusSlides(-1)} >❮</a>
        <a role='button' aria-label='Right' href="javascript:void(0)" className="next" onclick={()=>plusSlides(1)}>❯</a>

    </div>
    <br />

        <div style={{textAlign:"center"}}>
            <span className="dot"  onclick={()=>currentSlide(1)}></span>
            <span className="dot" onclick={()=>currentSlide(2)}></span>
            <span className="dot" onclick={()=>currentSlide(3)}></span>
        </div>
</div>

</div>

       </>
    );
}

export default PresentationImages;