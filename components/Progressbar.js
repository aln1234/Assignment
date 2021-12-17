



function Progressbar() {
    return (
        <div className="  max-w-6xl   items-center  mx-auto  mt-28 ">
            <div className="text-white font-mont font-bold ">
              <span className="text-3xl ml-4 md:pr-4">72.5%</span> 
              <span className="text-2xl">Numbers Staked</span>

            </div>
            <div>
                
<div className=" pl-6  md:pl-8">
    <div class=" rounded-lg w-full  p-4 m-auto">
     
        <div class="w-full h-2 bg-[#59905B]  rounded-full mt-12">
            <div class="w-2/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                
            </div>
            <div class="rounded-full bg-green-500 w-6 h-6 z-50 -mt-4 -ml-2 md:-ml-2 shadow shadow-green-500 "></div>
            <div class="rounded-full bg-green-500 w-6 h-6 z-50 -mt-6 ml-[40px] md:ml-[220px] shadow shadow-green-500 "></div>
            <div class="rounded-full bg-green-500 w-6 h-6 z-50 -mt-6 ml-[120px] md:ml-[460px] shadow shadow-green-500 "></div>
            <div class="rounded-full bg-[#59905B] w-6 h-6 z-50 -mt-6 ml-[220px] md:ml-[780px] shadow shadow-[#59905B] "></div>
            <div class="rounded-full bg-[#59905B] w-6 h-6 z-50 -mt-6 ml-[300px] md:ml-[1080px] shadow shadow-[#59905B] "></div>
        </div>
    </div>
    <div className="flex mt-4">
   
    <div className="text-white text-center text-[10px] text-sm md:text-xl -ml-4 font-mont text-ellipsis">
        New Staking <br /> Pools
        </div>
        <div className="text-white text-center text-[10px] md:text-xl font-mont ml-[5px] md:ml-[140px] text-ellipsis">
        World <br /> Expands
        </div>
        <div className="text-white text-center text-[10px] text-sm md:text-xl font-mont ml-[18px] md:ml-[130px] text-ellipsis">
       To be<br /> Confirmed
        </div>
        <div className="text-white text-center text-[10px] text-sm md:text-xl font-mont  ml-[60px] md:ml-[252px] text-ellipsis">
       ???
        </div>
        <div className="text-white text-center text-[10px] text-sm md:text-xl font-mont ml-[70px] md:ml-[280px] text-ellipsis">
       ???
        </div>
    </div>
</div>

            </div>
            
        </div>
    )
}

export default Progressbar
