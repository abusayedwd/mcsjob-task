import { useEffect, useState } from "react";

const JoinSection = () => {
  const [cards, serCards] = useState([]);

  useEffect(() => {
    fetch("/fakedb.json")
      .then((res) => res.json())
      .then((data) => serCards(data));
  }, []);
  return (
    <div className="mt-12 px-8 w-[90%] mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Want to <span className="text-blue-500">Join</span> Us?
        </h1>
        <p>
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="grid md:grid-cols-3  gap-6">
        {cards.map((card, index) => (
          <div key={index}>
            <div className="card shadow-2xl p-3 px-4 relative">
              <h1 className="font-bold text-center">{card.title}</h1>
              <p className="text-center">{card.description}</p>
              <div className="flex p-3 justify-around bg-slate-100 rounded-lg">
                <p>
                  <span className="text-blue-400 font-semibold">Due Date </span>
                  : <br />
                  {card.dueDate}
                </p>

                <p>
                  <span className="text-orange-500 font-semibold">
                    Penalty fees
                  </span>
                  :
                  <br />
                  <span className="font-bold">{card.within30Days}</span> per day 
                  <br /> 
                  <span className="font-bold">
                    {card.perMonth ? card.perMonth : "upper limit"}
                  </span> 
                  per month
                </p>
              </div>
              <p className="text-xl absolute -top-3 -left-3 bg-blue-500 w-12 p-2 rounded-xl text-white font-bold">
                {card.number}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every
        day until you file the form . There is no maximum penalty amount. So, if
        you dont file the form for a year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default JoinSection;
