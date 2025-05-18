import WorkshopIntro from './WorkshopIntro';
import WorkshopPerfume from './WorkshopPerfume';
import WorkshopCarDiffuser from './WorkshopCarDiffuser';
import WorkshopCandle from './WorkshopCandle';

const Workshop = () => {
  return (
    <>
      <div id="workshop-intro">
        <WorkshopIntro />
      </div>
      <div id="workshop-perfume" className="scroll-mt-24">
        <WorkshopPerfume />
      </div>
      <div id="workshop-car-diffuser" className="scroll-mt-24">
        <WorkshopCarDiffuser />
      </div>
      <div id="workshop-candle" className="scroll-mt-24">
        <WorkshopCandle />
      </div>
    </>
  );
};

export default Workshop;
