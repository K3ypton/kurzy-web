import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import carouselimg from "../assets/images/carouselimg.png";
import './CarouselStyle.css';


export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Vaša brána k vzdelávaniu na mieru",
      description:
        "Vytvorili sme zjednodušený proces, ktorý vám pomôže pri výbere kurzu a pomôže vám nájsť najvhodnejšie vzdelávacie prostriedky. ",
      img: carouselimg,
    },
    {
      title: "Začnite svoj vzdelávací proces vyplnením testu.",
      description:
        "Účelom tohto testu je určiť vaše silné a slabé stránky . Výsledok vám umožní dôkladne pochopiť, ktoré kurzy sú pre vás najvhodnejšie. ",
        img: carouselimg,
    },
    {
      title: "Po dokončení testu dostanete rady týkajúcich sa kategórií, ktoré by vám mohli byť najviac užitočné.",
      description:
        "Systém vám nájde oblasti, v ktorých ste preukázali slabšie znalosti, a odporučí vám kurzy v týchto oblastiach. Tieto návrhy vám majú pomôcť rozšíriť si vedomosti alebo naučiť sa nové veci v týchto konkrétnych oblastiach.",
        img: carouselimg,
    },
    {
      title: "Pomocou poznatkov z hodnotenia môžete preskúmať rozmanitú ponuku kurzov v rámci určených kategórií. ",
      description:
        "Vyberte si kurzy, ktoré zodpovedajú vašim záujmom a oblastiam, v ktorých sa chcete zlepšiť. Pre každú kategóriu poskytujeme rôzne možnosti, aby ste si mohli nájsť kurzy, ktoré sa vám páčia.",
        img: carouselimg,
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 0);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};


export default Carousel