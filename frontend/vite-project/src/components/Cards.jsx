import Cardd from "./Card";


const Cards = () => {
 
  return (
    <>
      <div className=" h-screen pt-36">
        <span className="text-3xl font-bold m-6  text-black">
          By focusing on key impact areas to deliver positive <br /> results for
          your brand.
        </span>
        <hr className="my-6 border-t-2 border-gray-300 w-3/5 mx-auto" />
        <div className="flex justify-evenly items-baseline m-2 p-9 font-serif text-xl">
          <span className="w-28 p-2">
            <h2 className="font-semibold w-auto">ROI</h2>
            Results that provide a positive return on your marketing investment.
          </span>
          <span className="w-28 p-2">
            <h2 className="font-semibold">Audience</h2>
            Understand your customers and find more of them.
          </span>
          <span className="w-28 p-2">
            <h2 className="font-semibold">Multichannel</h2>
            Engage your customers along the customer journey.
          </span>
          <span className="w-28 p-2">
            <h2 className="font-semibold">Brand Safe</h2>
            Present your brand in a safe digital advertising environment
          </span>
          <span className="w-28 p-2">
            <h2 className="font-semibold">Attribution</h2>
            Measure the contribution of every advertising channel.
          </span>
          <span className="w-28 p-2">
            <h2 className="font-semibold">Insights</h2>
            Generate insights that can lead a change in your business.
          </span>
        </div>
      </div>
      <div className="lg:p-9 p-20 bg-amber-400">
        <div className="pb-5 ">
          <span className="text-xl font-semibold">Our Plans</span>
        </div>
        <div className="">
        <Cardd />
        
        </div>
        
      </div>
    </>
  );
};

export default Cards;
