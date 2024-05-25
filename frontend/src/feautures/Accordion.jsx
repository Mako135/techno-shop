import { useRef } from "react";
import PropTypes from "prop-types";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Accordion = ({ title, children, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        {isOpen ? (
          <RiArrowUpSLine fontSize={24} />
        ) : (
          <RiArrowDownSLine fontSize={24} />
        )}
      </div>
      <div
        className={`accordion-content ${isOpen ? "open" : ""}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef?.current?.scrollHeight}px` : "0px"
        }}
      >
        <div className="accordion-content-text">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  toggleAccordion: PropTypes.func.isRequired
};

export default Accordion;
