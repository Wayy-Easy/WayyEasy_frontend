import { useState } from "react";
import contact from "./contactus.module.css";  
import { MdExpandLess, MdExpandMore } from "react-icons/md"; 


const ContactDynamicData = ({ questions, answer }) => {   
  const [show, setShow] = useState(false);

  

  return (
    <>
      {/* question section */}
      <article className={contact.question}>
        <div className={contact.content} onClick={() => setShow(!show)}>        
          <h3>{questions}</h3> 
          <button className={contact.btn} onClick={() => setShow(!show)}>
            {show ? <MdExpandLess /> : <MdExpandMore /> }  
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
