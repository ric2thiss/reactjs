"use client";
import { useState } from "react";
import Head from "next/head"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image"
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <div className={darkMode ? "dark":""}>
        <Head>
          <title>Ric Charles</title>
          <meta name="google-site-verification" content="7g7wtSSPdQ_r8TkE81s-7KCIZnzgNTgbP500ZZQFKXM" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="bg-blue px-10 md:px-20 lg:px-40 dark:bg-gray-600">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">Charles . Dev</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-xl dark:bg-white" onClick={() => setDarkMode(!darkMode)}/>
                </li>
                <li><a href="#" className="from-cyan-500 to-teal-500  bg-gradient-to-r text-white px-4 py-2 rounded-md ml-8 ">Resume</a></li>
              </ul>
            </nav>
            
            <div className="text-center p- ">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Ric Charles Paquibot</h2>
              <h3 className="text-2xl py-2 md:text-3xl">Full-Stack Web Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-500 md:text-xl max-w-lg mx-auto">Freelancer prodiving services for Web Development and Virtual Assistant task. Hire me to get started!</p>
              
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube /> 
            </div>

            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover"/>
            </div>
          </section>
          
          <section>
            <div>
              <h3 className="text-3xl py-1">Services</h3>
              <p className="text-md py-2 leading-8 text-gray-80">
                I have extensive experience in Full Stack Web Development. <span className="text-teal-500">Agencies</span> consulted for <span className="text-teal-500">startups</span>
                and collaborated with talented people to create digital products
                for both business and consumer user. 
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">I offer wide range of services, including programming and  <span className="text-teal-500">graphic designs</span>.</p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image className="mx-auto" src={design} width={100} height={100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs.</p>

                <h4 className="py-4 text-teal-600">Technology</h4>
                <p className="text-gray-800 py-1">PhotoShop</p>
                <p className="text-gray-800 py-1">Illustrator</p> 
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Canva</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image className="mx-auto" src={code} width={100} height={100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs.</p>

                <h4 className="py-4 text-teal-600">Technology</h4>
                <p className="text-gray-800 py-1">PhotoShop</p>
                <p className="text-gray-800 py-1">Illustrator</p> 
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Canva</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image className="mx-auto" src={consulting} width={100} height={100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs.</p>

                <h4 className="py-4 text-teal-600">Technology</h4>
                <p className="text-gray-800 py-1">PhotoShop</p>
                <p className="text-gray-800 py-1">Illustrator</p> 
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Canva</p>
              </div>
            </div>
          </section>

          <section>
            <div>
                <h3 className="text-3xl py-1">Portfolio</h3>
                <p className="text-md py-2 leading-8 text-gray-80">
                  I have extensive experience in Full Stack Web Development. <span className="text-teal-500">Agencies</span> consulted for <span className="text-teal-500">startups</span>
                  and collaborated with talented people to create digital products
                  for both business and consumer user. 
                </p>
                <p className="text-md py-2 leading-8 text-gray-800">I offer wide range of services, including programming and  <span className="text-teal-500">graphic designs</span>.</p>
              </div>
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1">
                    <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                </div>
              </div>
          </section>
        </main>
      </div>
    </div>
  )
}
