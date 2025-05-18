import ImageCarousel from '../common/ImageCarousel';
import img1 from '../../assets/workshop_car_1.jpg';
import img2 from '../../assets/workshop_car_2.jpg';
import img3 from '../../assets/workshop_car_3.jpg';
import img4 from '../../assets/workshop_car_4.jpg';

const carDiffuserImages = [img1, img2, img3, img4];

const WorkshopCarDiffuser = () => {
  return (
    <div className="bg-[#f7eddd] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Image Carousel */}
          <div className="md:w-1/2">
            <ImageCarousel 
              images={carDiffuserImages} 
              className="bg-white rounded-lg shadow-md" 
            />
          </div>

          {/* Right side - Text content */}
          <div className="md:w-1/2 space-y-8 text-center">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#23231f] leading-tight text-center">
                Car Diffuser<br />
                Workshop
              </h2>
              <p className="text-xl font-medium text-[#23231f] mt-3 mb-6 text-center">
                Craft a car scent that travels with you
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-[#23231f] leading-relaxed text-start md:pl-16">
                Create your own long-lasting car diffuser with<br />
                mood-lifting scents.<br />
                A great hands-on activity for car lovers and home<br />
                fragrance fans alike
              </p>
              
              <ul className="space-y-3 text-lg text-black font-semibold text-start md:pl-24">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#23231f] inline-block"></span>
                  <span>Price: $79</span>
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
        </div>
      </div>
    </div>
  );
};

export default WorkshopCarDiffuser;
