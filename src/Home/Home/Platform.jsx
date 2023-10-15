import manpic from "../../../public/Mask group.png";
import womenpic from "../../../public/Pexels Photo by MART PRODUCTION.png";
import search from "../../../public/Mask group (1).png";
import connect from "../../../public/Mask group (2).png";
import refresh from "../../../public/Mask group (3).png";
import academy from "../../../public/Mask group (4).png";
const Platform = () => {
  return (
    <div>
      <div className="md:flex w-[90%] mx-auto mt-12 md:gap-3 items-center justify-between py-8">
        <div className="md:w-[50%]">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {" "}
              <span className="text-blue-500">All-in-One</span> platform <br />
              that Makes Easier
            </h1>
            <p>
              We are more than a platform; We are your <br /> success partner.
              Discover our services to achieve <br /> your business and
              educational goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-4 mt-6">
            <div className="flex items-center justify-around">
              <img src={search} alt="" />
              <p>
                {" "}
                <span className="font-bold">SEARCH</span> for vital company
                information
              </p>
            </div>
            <div className="flex items-center gap-2 justify-around">
              <img src={connect} alt="" />
              <p>
                <span className="font-bold">CONNECTIONS</span> with the
                resources to meet your business needs
              </p>
            </div>
            <div className="flex items-center gap-2 justify-around">
              <img src={refresh} alt="" />
              <p>
                <span className="font-bold">REFRESH</span> and generate reports
                that drive growth
              </p>
            </div>
            <div className="flex items-center gap-2 justify-around">
              <img src={academy} alt="" />
              <p>
                <span className="font-bold">ACADEMY</span> to give you the
                skills for success in your career
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[50%]">
          <div className="flex items-center justify-evenly">
            <div className="text-right">
              <p className="bg-slate-200 p-1 rounded-md text-sm">
                Hey, check out loreumipsum services.
              </p>
              <p className="bg-slate-200 rounded-md text-sm mt-4 p-1">
                I learned from their videos, got my first job.
              </p>
            </div>
            <div>
              <img className="h-48" src={manpic} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div>
              <img className="h-48 rounded-3xl" src={womenpic} alt="" />
            </div>
            <div>
              <p className="bg-slate-200 p-1 rounded-md text-sm">
                I got a perfect analysis report from them too
              </p>
              <p className="bg-slate-200 w-28 rounded-md text-sm mt-4 p-1">
                Oh, that is great.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
