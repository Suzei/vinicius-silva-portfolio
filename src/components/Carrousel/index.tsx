import Slider, { Settings } from "react-slick"
import { SlideDetail, SliderItem, SliderManipulator } from "./styles"
import { useCallback, useState } from "react"
import { GlobalTheme } from "../../styles/theme"
import { DataInterface } from "../../interfaces/DataInterface"
import gsap from "gsap"

export function Carrousel({data}: {data?: DataInterface[]}) {

  const defaultInfo = data?.[0]


  const [carrousel, setCarrousel] = useState<DataInterface>({description: defaultInfo?.description, id: defaultInfo?.id, image: defaultInfo?.image, title: defaultInfo?.title})
  const settings: Settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    arrows: false,

    responsive: [
      {
        breakpoint: Number(GlobalTheme.breakpoints.tablet.replace('px', '')),
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  }

  const changeCarrouselItem = useCallback((item: DataInterface) => {
    gsap.fromTo('.pj', {
      opacity: 0,
    }, {opacity: 1})
    setCarrousel(item)
  }, [])

  return (
    <SliderManipulator>
      <div className="slider-container">

        <Slider className="slick-list" {...settings}>
         {data?.map(images => (
          <SliderItem onClick={() => changeCarrouselItem(images)} key={images.id}>
            {images.id}
          </SliderItem>
         ))}

        </Slider>
      </div>

      <SlideDetail key={carrousel.id} className="pj">
        <div>{}</div>

        <div>
          <span>{carrousel.title}</span>
          <p>{carrousel.description}</p>
        </div>
      </SlideDetail>
    </SliderManipulator>
  )
}
