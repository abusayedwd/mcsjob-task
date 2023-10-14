  
 import { FaAngleDown, FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navitem = <>
  
  <li className='font-bold'><Link  >Solution <FaAngleDown></FaAngleDown></Link></li> 
     <li className='font-bold'><Link  >Features <FaAngleDown></FaAngleDown> </Link></li>
     <li className='font-bold'><Link  >Blogs</Link></li>
     <li className='font-bold'><Link  >About <FaAngleDown></FaAngleDown></Link></li>
       
   </>
        return (
                <div>
                      <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navitem}
      </ul>
    </div>
     
    <Link to='/' className="btn btn-ghost normal-case text-xl text-rose-800 font-bold">logoipsum.</Link>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 "> 
          {navitem} 
    </ul>
  </div>
  </div>
  <div className="navbar-end">
    <Link className="border-2 px-3 py-1 rounded-md text-blue-400 font-medium">Login</Link>
    <Link className="px-3 ml-2 py-1 text-white rounded-md bg-blue-400 font-medium">Register</Link>
  </div>
</div>  
                </div>
        );
};

export default Navbar;