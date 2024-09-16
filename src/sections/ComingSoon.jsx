// // import React from 'react';
// // import { img1, cardImage1, img2 } from '../assets/images';

// // const ComingSoon = () => {
// //   const cards = [
// //     { 
// //       title: "PUMPFUN", 
// //       text: "Buy Now", 
// //       link: "https://pump.fun/", 
// //       image: img2, 
// //       initialRotation: "rotate-[-1deg]" 
// //     },
// //     { 
// //       title: "TELEGRAM", 
// //       text: "Join Now", 
// //       link: "https://t.me/", 
// //       image: cardImage1, 
// //       initialRotation: "rotate-[-4deg]" 
// //     },
// //     { 
// //       title: "X", 
// //       text: "Join Now", 
// //       link: "https://x.com/", 
// //       image: img1, 
// //       initialRotation: "rotate-[10deg]" 
// //     },
// //   ];

// //   return (
// //     <section className="w-full h-screen flex flex-col justify-center items-center">
// //       {/* CA Heading */}
// //       <h1 className="text-yellow-300 text-4xl md:text-6xl font-bold font-comic text-center mb-8">
// //         CA: 
// //       </h1>
      

// //       {/* Cards Positioned in the Middle */}
// //       <div className="w-[500px] max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
// //         {cards.map((card, index) => (
// //           <a 
// //             href={card.link} 
// //             key={index} 
// //             className={`block border-[4px] border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}
// //           >
// //             <div className="flex justify-center">
// //               <img
// //                 src={card.image}
// //                 alt={card.title}
// //                 className="w-[100px] max-w-xs py-6"
// //               />
// //             </div>
// //             <div className="p-4 text-center">
// //               <p className="font-comic text-sm mb-8 text-black">{card.text}</p>
// //             </div>
// //           </a>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ComingSoon;

// import React from 'react';
// import { img1, cardImage1, img2 } from '../assets/images';

// const ComingSoon = () => {
//   const cards = [
//     { 
//       title: "PUMPFUN", 
//       text: "Buy Now", 
//       link: "https://pump.fun/", 
//       image: img2, 
//       bgColor: " bg-black opacity-50  "
//     },
//     { 
//       title: "TELEGRAM", 
//       text: "Join Now", 
//       link: "https://t.me/", 
//       image: cardImage1, 
//       bgColor: "bg-black "
//     },
//     { 
//       title: "X", 
//       text: "Join Now", 
//       link: "https://x.com/", 
//       image: img1, 
//       bgColor: "bg-gradient-to-r from-purple-400 to-pink-600"
//     },
//   ];

//   return (
//     <section className="w-full h-screen  flex flex-col justify-center items-center">
//       {/* CA Heading */}
//       <h1 className="text-yellow-300  text-4xl md:text-6xl font-bold font-comic text-center mb-8">
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
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
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
      link: "https://t.me/", 
      image: cardImage1, 
      bgColor: "bg-black bg-opacity-50"
    },
    { 
      title: "X", 
      text: "Join Now", 
      link: "https://x.com/", 
      image: img1, 
      bgColor: "bg-black bg-opacity-50"
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      {/* CA Heading */}
      <h1 className="text-white text-4xl md:text-6xl font-bold font-elite text-center mb-8">
        CA: 
      </h1>
      
      {/* Cards Positioned in the Middle */}
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
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

