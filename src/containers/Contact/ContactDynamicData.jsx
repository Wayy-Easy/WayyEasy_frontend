import { useState } from "react";
import contact from "./contactus.module.css";


const ContactDynamicData = ({ questions, answer }) => {   
  const [show, setShow] = useState(false);

  return (
    <>
      {/* question section */}
      <article className={contact.question}>
        <div className={contact.content} onClick={() => setShow(!show)}> 
          <h3>{questions}</h3>
          <button className={contact.btn}> 
          <span
              className="material-symbols-outlined"       
              style={{
                transform: `rotate(${show ? 180 : 0}deg)`,  
                transition: "all 0.25s",
              }}
            >
              expand_more 
            </span>
          </button>
        </div>

        {/* answer section */}

        {show && (
          <div className={contact.answer}> 
            <p>{answer}</p>
          </div>
        )}
      </article>
    </>
  );
};

export default ContactDynamicData;
