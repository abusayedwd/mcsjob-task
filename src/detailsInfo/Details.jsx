/* eslint-disable react-hooks/exhaustive-deps */
import { AiTwotoneStar } from "react-icons/ai";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import detailsimage from "../../public/Rectangle 376.png";

import Recommend from "./Recomend";
import { BsCalendar3 } from "react-icons/bs";

const Details = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState();
  const [showJob, setShowJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("/detailsdata.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const jobData = data.find((info) => info.id == id);
        setShowJob(jobData);
      });
  }, []);

  return (
    <>
      <div className=" md:flex mx-4 gap-5 mt-12 md:mx-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">{showJob?.name}</h1>
          <p className="text-xl mt-4 mb-8">{showJob?.intro}</p>
          <p className="flex items-center gap-3 mb-8">
            <AiTwotoneStar></AiTwotoneStar> {showJob?.rating} (
            {showJob?.reviewCount})
          </p>

          {/* card details */}

          <div className="shadow-xl rounded-lg p-8 ">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium">
                {" "}
                {showJob?.taskComplexity}
              </h1>
              <p className="text-xl font-bold">{showJob?.price}</p>
            </div>

            <div className="flex items-center mt-8 gap-3">
              <BsCalendar3></BsCalendar3>
              <h1 className="text-xl font-medium">{showJob?.deliveryTime}</h1>
            </div>

            <div className="grid grid-cols-2 mt-5">
              <button className="border-2 rounded-xl font-bold text-base  bg-[#0076CE] text-white px-3 py-2">
                Request Proposal
              </button>
              <button className="border-2 border-[#0076CE] rounded-xl font-bold text-base  text-[#0076CE] px-3 py-2">
                Chat with me
              </button>
            </div>
          </div>

          <div className="shadow-xl  mt-8 p-7 ">
            <h1 className="text-3xl font-bold mb-4">
              {showJob?.testimonial?.author}
            </h1>
            <p className="text-xl">{showJob?.testimonial?.text}</p>
          </div>
        </div>

        {/* about details */}

        <div className="md:w-1/2">
          <div>
            <img src={detailsimage} alt="" />
            <div></div>

            <p className="mt-8 text-4xl font-bold mb-5">
              About {showJob?.name}
            </p>

            <div className="flex justify-between">
              <div>
                <p className="text-base font-bold mb-2">FROM</p>
                <p className="text-lg font-normal">{showJob?.about?.from}</p>
              </div>

              <div>
                <p className="text-base font-bold mb-2">PARTNER SINCE</p>
                <p className="text-lg font-normal">
                  {showJob?.about?.partnerSince}
                </p>
              </div>

              <div>
                <p className="text-base font-bold mb-2">
                  AVERAGE RESPONSE TIME
                </p>
                <p className="text-lg font-normal">
                  {showJob?.about?.averageResponseTime}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-base font-bold mb-2">ABOUT</h1>
              <p className="text-xl font-normal mb-8">
                {showJob?.about?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 mb-8">
              <div>
                <p className="text-base font-bold mb-2">SERVICES I OFFER</p>

                <li>{showJob?.about?.services[0]}</li>
                <li>{showJob?.about?.services[1]}</li>
                <li>{showJob?.about?.services[2]}</li>
              </div>

              <div>
                <p className="text-base font-bold mb-2">WHY ME?</p>
                <li> {showJob?.about?.benefits[0]}</li>
                <li> {showJob?.about?.benefits[1]}</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recomended */}
      <div className="md:mx-20">
        <Recommend></Recommend>
      </div>
    </>
  );
};

export default Details;
