


// import React from 'react';
// import { img1, cardImage1, img2 } from '../assets/images';

// const ComingSoon = () => {
//   const cards = [
//     { 
//       title: "PUMPFUN", 
//       text: "Buy Now", 
//       link: "https://pump.fun/", 
//       image: img2, 
//       bgColor: "bg-black bg-opacity-50"
//     },
//     { 
//       title: "TELEGRAM", 
//       text: "Join Now", 
//       link: "https://t.me/SWOOTERsol", 
//       image: cardImage1, 
//       bgColor: "bg-black bg-opacity-50"
//     },
//     // { 
//     //   title: "X", 
//     //   text: "Join Now", 
//     //   link: "https://x.com/", 
//     //   image: img1, 
//     //   bgColor: "bg-black bg-opacity-50"
//     // },
//   ];

//   return (
//     <section className="w-full h-screen flex flex-col justify-center items-center">
//       {/* CA Heading */}
//       <h1 className="text-white text-4xl md:text-6xl font-bold font-elite text-center mb-8">
//         CA: 
//       </h1>
      
//       {/* Cards Positioned in the Middle */}
//       <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
//         {cards.map((card, index) => (
//           <a 
//             href={card.link} 
//             key={index} 
//             className={`relative block w-48 h-48 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110 ${card.bgColor} cursor-pointer text-center shadow-lg`}
//           >
//             {/* Image inside circle */}
//             <div className="flex items-center justify-center h-full">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-24 h-24 object-contain"
//               />
//             </div>

//             {/* Text overlay */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
//               <h3 className="text-xl font-bold mb-2">{card.title}</h3>
//               <p className="text-sm">{card.text}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ComingSoon;


import React from 'react';
import { img1, cardImage1, img2 } from '../assets/images';

const ComingSoon = () => {
  const cards = [
    { 
      title: "PUMPFUN", 
      text: "Buy Now", 
      link: "https://pump.fun/", 
      image: img2, 
      bgColor: "bg-black bg-opacity-50"
    },
    { 
      title: "TELEGRAM", 
      text: "Join Now", 
      link: "https://t.me/SWOOTERsol", 
      image: cardImage1, 
      bgColor: "bg-black bg-opacity-50"
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      {/* CA Heading */}
      <h1 className="text-white text-4xl md:text-6xl font-bold font-elite text-center mb-8">
        CA: 
      </h1>
      
      {/* Cards Centered in the Middle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {cards.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            className={`relative block w-48 h-48 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110 ${card.bgColor} cursor-pointer text-center shadow-lg`}
          >
            {/* Image inside circle */}
            <div className="flex items-center justify-center h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-red-600">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
