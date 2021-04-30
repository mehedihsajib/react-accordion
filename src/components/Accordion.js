import { useState } from "react";
import { Data } from "./Data";
// import { IconContext } from "react-icons";
// import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = () => {
  const [clicked, setClicked] = useState(null);

  const toggleAccordion = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="accordion__wrapper">
      <h1 className="accordion__heading">Frequently Asked Question</h1>
      <div className="accordion">
        {Data.map((item, index) => (
          <div>
            <h3
              className="accordion__question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </h3>

            {clicked === index ? (
              <p className="accordion__answer">{item.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
