import Slider, { Settings } from "react-slick"
import { SliderItem, SliderManipulator } from "./styles"

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
    </SliderManipulator>
  )
}
