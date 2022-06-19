import React from 'react'
import c1 from '../assets/customer1.jpg';
import c2 from '../assets/customer2.jpg';
import c3 from '../assets/customer3.jpg';

const Testomonials = () => {
  return (
    <div name='Testomonials'>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">WE LOVE OUR VALUABLE CUSTOMER'S FEEDBACK</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Happy Customers</h1>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={c1}/>
                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Mohammed Safarullah</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={c2}/>
                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">VillCassim</h2>
                            <p class="text-gray-500">UI Develeoper</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={c3}/>
                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Haathim Munas</h2>
                            <p class="text-gray-500">CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testomonials