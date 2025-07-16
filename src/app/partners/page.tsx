'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaQuoteLeft, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

// === CAMBIO 1: Añadimos 'truckersMP_url' a cada partner ===
// DEBES REEMPLAZAR LOS ENLACES "#" CON LAS URLS REALES DE TRUCKERSMP
const partnersData = [
  {
    name: "Truck Convoy Control and Route",
    logoSrc: "/logos/tccr.png",
    truckImageSrc: "/images/partner_trucks/tccrTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/50578",
    about: "At Truck Convoy Control and Route, our mission is to connect the virtual trucking community by providing organized events and unforgettable experiences.",
    ownerComment: "This partnership reinforces our shared mission to provide exciting and engaging experiences for our communities, and we look forward to many more convoys and collaborations together!",
    ourComment: "For us, unity is strength, therefore creating bonds is very important so we look for companies equally competent and focused on being the best to go even further, for this, the union between Destiny VTC and Truck Convoy Control and Route generates us a great sense of strength"
  },
  {
    name: "Nova Era Transportes",
    logoSrc: "/logos/nova.png",
    truckImageSrc: "/images/partner_trucks/novaeraTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/34966", 
    about: "Under the motto 'Together towards a new horizon', we focus on creating a friendly environment, where friendship, collaboration, and fun are the most important. We are characterized by respect among our members and our commitment to offer unique experiences in every event we organize.",
    ownerComment: "I am very happy to have them back as part of the family. Since our first steps together, Destiny has been a great support, especially in my early days as an owner, and I have always valued that mutual trust.",
    ourComment: "It is a pleasure and an honor to be once again together as a team with such an impeccable and determined leader at the helm of a promising VTC such as Nova Era Transportes. From here a road together towards a new horizon is born."
  },
  {
    name: "Pean Logistics",
    logoSrc: "/logos/pean.png",
    truckImageSrc: "/images/partner_trucks/peanTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/64631", 
    about: "Founded by itsPeanutttt, a Twitch Streamer, on the 23rd of July 2023 A verified and organized VTC with a DriversHub Tracker by Trucky, with custom bots in Discord and an excellent responsive Staff Team to deal with any questions/issues that may come up.",
    ownerComment: "As Pean Logistics forms a great friendship/bond with Destiny VTC we reached out to them/each other in regarding a bond/partnership to grow friendships and teams together.",
    ourComment: "This partnership is another sign that we are growing and we are on the right track and what better than with our friends of Pean Logistics who once again have placed their trust in us which not only leads us to be bigger, but at the same time we continue to strengthen ties of friendship and support that is of utmost importance to our company."
  },
  {
    name: "Ghost Express",
    logoSrc: "/logos/ghost.png",
    truckImageSrc: "/images/partner_trucks/ghostTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/53371", 
    about: "Ghost Express is a Virtual Trucking Company based around American Truck Simulator & Euro Truck Simulator 2. It was originally founded on June 11th, 2020, by Ghost to bring people together and provide them with a family feel environment.",
    ownerComment: "Here at Ghost Express, we are happy to see a partnership form between us and Destiny VTC. Many of my members enjoyed Destiny's events and its overall community before it had closed originally, and all are very happy to see Destiny VTC return.",
    ourComment: "For us our destiny is very important, therefore, we must follow a good path where we meet wonderful people like Ghost Express. Although we knew each other from afar before we closed, today we become one in this world of TMP to forge more than an alliance, a friendship between all of us"
  },
  {
    name: "Line of Energy",
    logoSrc: "/logos/loe.png",
    truckImageSrc: "/images/partner_trucks/loeTruck.jpeg",
    truckersMP_url: "https://truckersmp.com/vtc/25294", 
    about: "We seek above all a union between users where there is fun, respect, companionship and desire to entertain us. We make Convoys within large organizations of International companies.",
    ownerComment: "An incredible VTC of which I have been able to be a spectator of its exponential growth during its trajectory. We are more than proud and happy to start this partnership with Destiny VTC, aiming to improve as a team from now on",
    ourComment: "We have known each other for more than 3 years and we have formed a great friendship so we are very happy to turn our friendship into a union, what we call our family. We are very excited about what the future holds for us with this great collaboration. We firmly believe that together we will achieve great success and strengthen our community."
  },
  {
    name: "Pink Ribbon VTC",
    logoSrc: "/logos/prvtc.png",
    truckImageSrc: "/images/partner_trucks/prvtcTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/54938", 
    about: "PRVTC was created on 18th May 2022 by - Pink Ribbon - on a mission to spread awareness of the Pink Ribbon and its cause. We show support for the Pink Ribbon campaign by proudly wearing the Wings Of Hope livery!",
    ownerComment: "For years we only had great experiences with Destiny in each others servers and at events. With this partnership we will strengthen that bond and create a lot of possibilities to have many wonderful moments between our families.",
    ourComment: "Not only do we fully support the cause they support, but we have also had several good experiences with the VTC. We love Pink Ribbon, their drivers and staff are always nice. Another reason why we wanted this partnership is that their staff team was always there to help us when we needed it, no matter what it was, they were always there for us."
  },
  {
    name: "Ponc Logistics",
    logoSrc: "/logos/ponc.png",
    truckImageSrc: "/images/partner_trucks/poncTruck.jpg",
    truckersMP_url: "https://truckersmp.com/vtc/55595", 
    about: "Founded on June 18, 2022 by whitE.png, Ponc Logistics is a standout in the TruckersMP world. Built on the idea that discipline and fun can go hand-in-hand, they’ve grown into a respected, well-structured VTC that continues to innovate, engage, and bring value to every player they interact with.",
    ownerComment: "We’re excited about this partnership with Destiny! We believe it will bring great value to both communities, with more convoy opportunities, shared events, and a stronger connection between our teams.",
    ourComment: "We look forward to collaborating with Ponc Logistics and creating memorable experiences together. Their commitment to discipline and fun aligns perfectly with our values, and we can't wait to see what the future holds for our partnership."
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/convoy-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold">Our Partners</h1>
          <p className="mt-4 text-xl">The amazing VTCs we are proud to work with.</p>
        </div>
      </section>

      <div className="bg-[var(--background-main)]">
        {partnersData.map((partner, index) => (
          <section key={partner.name} className={index % 2 === 0 ? 'bg-[var(--background-main)]' : 'bg-[var(--background-contrast)]'}>
            <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
              
              <motion.div 
                className={`relative w-full h-100 rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src={partner.truckImageSrc}
                  alt={`${partner.name} truck`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div 
                className={`flex flex-col gap-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <a 
                  href={partner.truckersMP_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <Image src={partner.logoSrc} alt={`${partner.name} logo`} width={60} height={60} className="rounded-md"/>
                    <h2 className="text-4xl font-bold text-white">{partner.name}</h2>
                  </div>
                </a>

                <div>
                  <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-2">About Them</h3>
                  <p className="text-gray-300">{partner.about}</p>
                </div>
                
                <div className="border-l-4 border-[var(--accent-muted)] pl-4 italic space-y-4">
                  <blockquote className="text-gray-400">
                    <FaQuoteLeft className="inline-block mr-2" />
                    {partner.ownerComment}
                    <cite className="block mt-2 text-sm not-italic">- Owner of {partner.name}</cite>
                  </blockquote>
                  <blockquote className="text-gray-400">
                    <FaHandshake className="inline-block mr-2" />
                    {partner.ourComment}
                    <cite className="block mt-2 text-sm not-italic">- A word from Destiny VTC</cite>
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}