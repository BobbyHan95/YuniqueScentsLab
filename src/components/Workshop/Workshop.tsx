import WorkshopIntro from './WorkshopIntro';
import WorkshopBooking from './WorkshopBooking';

const Workshop = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <WorkshopIntro />
      <WorkshopBooking />
    </div>
  );
};

export default Workshop;
