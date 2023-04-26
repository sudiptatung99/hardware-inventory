import React from 'react'


export const Login = () => {

  return (
   <section className="gradient-form h-full bg-neutral-800 dark:bg-neutral-700">
  <div className="container h-full p-10">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg white:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* Left column container*/}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/*Logo*/}
                <div className="text-center w-full " >
                  <img className=" w-24" src={process.env.PUBLIC_URL + "./image/pbc.png"} alt="logo" style={{margin:"0 auto"}} />
                  <h4 className="mb-4 mt-1 pb-1 text-2xl text-blue-600 font-bold">
                    Panskura Banamali College <br /> (Autonomous)
                  </h4>
                  <h4 className="mb-3  pb-1 text-xl text-green-500 font-bold">
                     <span className='border border-green-500 pt-2 border-x-8 shadow-2xl shadow-slate-800 pb-10 rounded-md px-5'>Computer Science</span><br /> (Hardware Lab)
                  </h4>
                </div>
                <form className='mt-10'>
                  <p className="mb-4 font-bold text-blue-600"> Login to your account</p>
                  {/*Username input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <label class="block text-black text-sm font-bold mb-2" for="username">
                    Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                  </div>
                  {/*Password input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <label class="block text-black text-sm font-bold mb-2" for="username">
                  Password
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="password" placeholder="password"/>
                  </div>
                  {/*Submit button*/}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_18px_0_rgba(21, 175, 252 )] transition duration-150 ease-in-out hover:shadow-2xl hover:shadow-slate-800 focus:shadow-[0_4px_18px_0_rgba(21, 175, 252 )] focus:outline-none focus:ring-0 bg-blue-600 active:shadow-[0_4px_18px_0_rgba(21, 175, 252 )]" type="button" data-te-ripple-init data-te-ripple-color="light">
                      Log in
                    </button>
                    {/*Forgot password link*/}
                    <a href="#!" className='text-blue-950'>Forgot password?</a>
                  </div>
                  {/*Register button*/}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2 text-blue-950">Don't have an account?</p>
                    <button type="button" className="mb-3 inline-block px-4 rounded  pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_18px_0_rgba(21, 175, 252 )] transition duration-150 ease-in-out hover:shadow-2xl hover:shadow-slate-800 focus:shadow-[0_4px_18px_0_rgba(21, 175, 252 )] focus:outline-none focus:ring-0 bg-blue-600 active:shadow-[0_4px_18px_0_rgba(21, 175, 252 )]" data-te-ripple-init data-te-ripple-color="light">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right column container with background and description*/}
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #009CEA,#14C5F0, #14F022,#1457F0 , #1457F0)'}}>
              <div>
    <div id="carouselExampleCrossfade" className="relative" data-te-carousel-init data-te-carousel-slide>
  {/*Carousel indicators*/}
  <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
    <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={0} data-te-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={1} className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 2" />
    <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={2} className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 3" />
  </div>
  {/*Carousel items*/}
  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/*First item*/}
    <div className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="block w-full" alt="Wild Landscape" />
    </div>
    {/*Second item*/}
    <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="block w-full" alt="Camera" />
    </div>
    {/*Third item*/}
    <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="block w-full" alt="Exotic Fruits" />
    </div>
  </div>
  {/*Carousel controls - prev item*/}
  <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
  </button>
  {/*Carousel controls - next item*/}
  <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
  </button>
</div>


              </div>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}
