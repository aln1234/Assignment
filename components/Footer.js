import Image from "next/image"

import Twitter from "../images/twitter.png"
import Discord from "../images/discord.png"
import Insta from "../images/insta.png"

function Footer() {
    return (
        <div className="bg-[url('../images/top.png')] bg-opacity-25  "
        >
          
            <div className="text-white font-steel text-center text-2xl mt-12 pt-64">
              Logo
        </div>
       <div className="flex items-center justify-center mt-8 space-x-4 ">
           <div className="relative h-6   w-6 cursor-pointer  ">
        
           <Image src={Twitter}
             layout="fill"
             objectFit="contain"    
            className="object-center"/>

           </div>
           <div className="relative h-6 w-6 cursor-pointer  ">
        
        <Image  src={Discord}
          layout="fill"
          objectFit="contain"    
         className="object-center"/>

        </div>
      
        <div className="relative h-6   w-6 cursor-pointer  ">
        
        <Image src={Insta}
          layout="fill"
          objectFit="contain"    
         className="object-center"/>

        </div>
      
         
      

       </div>
       <div className="text-white text-center mt-6 font-mont text-sm ">
       Terms and Conditions
       </div>
       <div className="text-white text-center mt-6 pb-12 font-mont text-sm ">
       © 2021 Logo. All rights reserved
       </div>
     

            </div>
         
            
  
 
 
 
 )
}

export default Footer
