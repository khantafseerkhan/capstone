import { useEffect, useState } from "react";

const PresentationImages = (props) => {


  const [activeimg,setActiveimg]=useState();

  let slideIndex = 1;

  let productImages=[];
  for(let i=0;i<6;i++){
    productImages.push(props.propductimg)
  }

  useEffect(() => {

    showSlides(slideIndex);
    console.log(props.propductimg)
    setActiveimg(productImages[0]);

    console.log("activeimg   "+activeimg)

  }, [])


  const changeactiveimg=(img)=>{
    setActiveimg(img);

  }

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }


  const currentSlide1 = (n) => {
   // alert("come into")

    showSlides(slideIndex = n);
  }

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  const scrollUp = () => {
    document.getElementById('img-menu').scrollTop += 20;

  }

  const scrollDown = () => {
    document.getElementById('img-menu').scrollTop -= 20;

  }


  const activeli=(e)=>{
    let el=e.target;
    let siblings=el.parentElement.parentElement.children

    for(let i=0;i<siblings.length;i++){
      siblings[i].classList.remove('active-border');

    }
    el.parentElement.classList.add('active-border')
  }


  return (
    <>
      <div className="aem-Grid aem-Grid--12 tab-hide phone-hide">
        {/* filter section */}
        <div className="aem-GridColumn aem-GridColumn--default--2">
          {/* <div className="slide-button"> 
            <a href="javascript:void(0)">
              <img src={require("../../../../assets/img/chevron-up.png")} />
            </a>
           </div> */}

          <div className="img-menu" id="img-menu">
            <ul>


              {
                productImages.map((element,index)=>{
                  return(
                    <li role="button" onClick={(e)=>{activeli(e);changeactiveimg(element)}}><img src={element} alt="item" /> </li>

                  )

                })
              }

            </ul>
          </div>

          {/* <div className="slide-button">

          <a href="javascript:void(0)">
              <img src={require("../../../../assets/img/chevron-down.png")} onClick={() => scrollDown()}/>
            </a>
          
          </div> */}

        </div>

        <div className="aem-GridColumn aem-GridColumn--default--8 activeImage">
          <img src={activeimg && activeimg!="" ?activeimg:props.propductimg} alt="item" />
        </div>
      </div>

      <div className="aem-Grid aem-Grid--12 tab-show phone-show">
        <div className="aem-GridColumn aem-GridColumn--default--12 ">

          <div className="slideshow-container ">

          {
                productImages.map((element,index)=>{
                  return(
                    <div className="mySlides fade center-box">
                    <div className="numbertext">{index+1+" /"+ productImages.length}</div>
                    <img src={props.propductimg}  alt="item" />
                  </div>
                  )

                })
              }
            
            <a role='button' aria-label='Left' href="javascript:void(0)" className="prev" onClick={() => plusSlides(-1)} >❮</a>
            <a role='button' aria-label='Right' href="javascript:void(0)" className="next" onClick={() => plusSlides(1)}>❯</a>

          </div>
          <br />

          <div style={{ textAlign: "center" }}>
          
          {
                productImages.map((element,index)=>{
                  return(
                    <span className="dot" onClick={() => currentSlide1(index+1)}></span>
                    )

                })
              }
          
            
          </div>
        </div>

      </div>

    </>
  );
}

export default PresentationImages;