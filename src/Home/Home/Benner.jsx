 import './Benner.css'
 import image1 from '../../../public/Picture.png'
 import image2 from '../../../public/Picture (1).png'
 import image3 from '../../../public/Picture (2).png'

const Benner = () => {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-slate-100'>
      <div className="md:flex bennerr py-20 w-[90%] mx-auto bg-gradient-to-r from-slate-50 to-slate-100">
        <div className='px-6'>
          <h1 className="text-4xl font-sans font-bold">
            Find <span className="text-blue-500">Partners</span> (CAs) <br />{" "}
            available online
          </h1>
          <p className='mt-4'>
            <span className=" text-gray-400 font-semibold">CONNECT</span> with us where your services are listed and visible to a
            myriad <br /> of businesses seeking CA’s for compliance support
          </p>
          <div className="form-control mt-8">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by name..."
                className="input input-bordered md:w-80 w-48"
              />
              <button className="px-4 py-1 search-btn text-xs font-semibold">
                 Search
              </button>
            </div>
          </div>
        </div>
        <div className='flex gap-2'> 
             <img className='mt-8 w-50 h-80' src= {image1} alt="" />
             <img className='mb-8 w-50 h-80' src= {image2} alt="" />
             <img className='mt-4 w-50 h-80' src= {image3} alt="" />
              
        </div>
      </div>
    </div>
  );
};

export default Benner;
