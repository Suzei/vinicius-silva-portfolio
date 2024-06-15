import Slider, { Settings } from "react-slick"
import { SlideDetail, SliderItem, SliderManipulator } from "./styles"
import { useCallback, useEffect, useRef } from "react"

export function Carrousel() {
  const settings: Settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  }

  const changeCarrouselItem = useCallback(() => {
    console.log('hello!')
  }, [])

  return (
    <SliderManipulator>
      <div className="slider-container">

        <Slider className="slick-list" {...settings}>
          <SliderItem>
            <p>1</p>
          </SliderItem>

          <SliderItem>
            <p>2</p>
          </SliderItem>

          <SliderItem>
            <p>3</p>
          </SliderItem>
        </Slider>
      </div>

      <SlideDetail>
        <div></div>

        <div>
          <p>Lorem ipsum dolor sit amet consecuteur</p>
        </div>
      </SlideDetail>
    </SliderManipulator>
  )
}
