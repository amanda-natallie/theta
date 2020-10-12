import Carousel from "react-multi-carousel";




// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CustomCarousel = ({ deviceType,responsive,  children }) => {
  return (
    <Carousel
      ssr={true}
      partialVisible
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
