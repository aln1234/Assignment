import {

    MenuIcon,


} from "@heroicons/react/outline"



function Header() {
    return (
      
                <nav className=" pt-10 sm:px-4 py-2.5 rounded">
  <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto ">
  <a href="#" className="flex  ">
 
    <h1 className="font-steel text-white md:text-3xl ml-4 ">Logo</h1>
   
  </a>
  <div className="flex items-center md:order-2 border-white">
  <button className="hidden md:inline-flex bg-transparent hover:bg-blue-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
  Join Our Discord
</button>
<MenuIcon className="h-6 md:hidden cursor-pointer text-white mr-4"/>
   
    
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
         < a href="#" className=" font-mont block py-2 pl-3 pr-4 text-white  uppercase text-md ">About</a>
      </li>
      <li>
        <a href="#" className="  font-mont block py-2 pl-3 pr-4 text-white  uppercase text-md ">Road Map</a>
      </li>
      <li>
        <a href="#" className="  font-mont block py-2 pl-3 pr-4 text-white  uppercase text-md ">FAQ</a>
      </li>
      <li>
        <a href="#" className="  font-mont block py-2 pl-3 pr-4 text-white  uppercase text-md  ">Team</a>
      </li>
    
    </ul>
  </div>
  </div>
</nav>
                
    
    )
}

export default Header
