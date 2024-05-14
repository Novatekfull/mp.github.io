import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../hook/useScrollPosition";

// function ScrollToTopOnRouteChange() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // Défilement vers le haut de la page à chaque changement de page
//   }, [location]); // Effectuer le défilement lorsque l'emplacement change

//   return null;
// }

export const SectionHome = () => {




  // const scrollPosition = useScrollPosition();



  return (
    <section id="banner" className="flex  w-full items-center justify-center">
      {/* <ScrollToTopOnRouteChange /> */}
      <div className="flex  flex-col items-center justify-center w-full">
        <div className="w-full  bg-black  opacity-55">
          <img
            src="assets/images/image1.jpg"
            alt="Banner Image"
            className="w-full h-full object-cover  bg-black"
          />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Votre texte ici</h1>
          <p className="text-lg">Description de votre bannière</p>
        </div>
      </div>
      <div></div>
      <article
        id="firstArticle"
        // className={`${
        //   scrollPosition > 300 ? "opacity-100 " : "opacity-0 absolute"
        // } `}
      >
        <h1>article 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          et dolor consectetur porttitor. Proin rhoncus nisl at mi pulvinar, non
          lacinia lacus ultricies. Vestibulum nec leo orci. Phasellus id metus
          sit amet risus consectetur ultricies. Donec lacinia, sem et fermentum
          dictum, justo tortor tempor risus, id dictum orci nisl vel velit.
          Aenean vitae enim a magna aliquet tincidunt. In hac habitasse platea
          dictumst. Vivamus sodales lobortis ante ut cursus. Donec in metus sed
          felis accumsan consequat. Aliquam nec urna in velit blandit aliquam eu
          et diam. Pellentesque eget quam eget sapien volutpat suscipit.
        </p>
      </article>
    </section>
  );
};
