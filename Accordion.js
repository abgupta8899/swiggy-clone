import React, { useState } from "react";

const accordionData = [
  {
    title: "What is Netflix?",
    content:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "How much does Netflix cost?",
    content:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
  },
  {
    title: "Where can I watch?",
    content:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
];

function Accordion() {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  return (
    <div>
      {accordionData.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            activeAccordionId={activeAccordionId}
            setActiveAccordionId={setActiveAccordionId}
            isActive={activeAccordionId === index}
            index={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

const AccordionItem = ({ index, item, isActive, setActiveAccordionId }) => {
  return (
    <div
      style={{ border: "solid 1px", marginBottom: "8px" }}
      onClick={() => {
        if (isActive) {
          setActiveAccordionId(null);
          return;
        }
        setActiveAccordionId(index);
      }}
    >
      <div>
        <h3>{item.title}</h3>
      </div>
      <div
        style={{
          height: isActive ? "auto" : "0px",
          overflow: "hidden",
        }}
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Accordion;
