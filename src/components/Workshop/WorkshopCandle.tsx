import ImageCarousel from '../common/ImageCarousel';
import img1 from '../../assets/workshop_candle_1.jpg';
import img2 from '../../assets/workshop_candle_2.jpg';
import img3 from '../../assets/workshop_candle_3.jpg';
import img4 from '../../assets/workshop_candle_4.jpg';
import img5 from '../../assets/workshop_candle_5.jpg';

const candleImages = [img1, img2, img3, img4, img5];

const WorkshopCandle = () => {
  return (
    <div className="bg-[#f7eddd] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="md:w-1/2 space-y-8 text-center">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#23231f] leading-tight text-center">
                Sand Art Candle<br />
                Workshop
              </h2>
              <p className="text-xl font-medium text-[#23231f] mt-3 mb-6 text-center">
                Layer colors and scents into a unique candle
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-[#23231f] leading-relaxed text-start md:pl-16">
                Design your own sand art candle using layered<br />
                colored sands and choose from our selection of<br />
                therapeutic scents.<br />
                Take home a unique piece of art that smells as<br />
                good as it looks!
              </p>
              
              <ul className="space-y-3 text-lg md:pl-24 text-black font-semibold">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#23231f] inline-block"></span>
                  <span>Price: $74</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#23231f] inline-block"></span>
                  <span>Duration: 90-120 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#23231f] inline-block"></span>
                  <span>Small class sizes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#23231f] inline-block"></span>
                  <span>Materials Included</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side - Image Carousel */}
          <div className="md:w-1/2">
            <ImageCarousel 
              images={candleImages} 
              className="bg-white rounded-lg shadow-md" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCandle;
