import { useState, useEffect } from "react";
import contact from "./contactus.module.css";
import ContactDynamicData from "./ContactDynamicData"; 
import { fAQData, legalData, partnerOnboardingData } from "./data/data";  


const ContactUs = () => {
  const [dynamicContactData, setDynamicContactData] = useState(
    partnerOnboardingData
  );

  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index === 1) {
      setDynamicContactData(partnerOnboardingData);
    } else if (index === 2) {
      setDynamicContactData(legalData);
    } else if (index === 3) {
      setDynamicContactData(fAQData);
    }
  }, [index]);

  return (
    <div className={contact.mainContainer}> 
      <div className={contact.headline}> 
        <h1>Help & Support</h1>
        <p>Let take a step ahead and help you better</p> 
      </div>

      <div className={contact.dataContainer}>  
        <div className={contact.headingContainer}> 
          <h3
            style={{
              background: index === 1 ? "blue" : "white",
              color: index === 1 ? "white" : "black",
            }}
            onClick={() => {
              setIndex(1);
            }}
          >
            Partner Onboarding
          </h3>
          <h3
            style={{
              background: index === 2 ? "blue" : "white",
              color: index === 2 ? "white" : "black",
            }}
            onClick={() => {
              setIndex(2);
            }}
          >
            Legal
          </h3>

          <h3
            style={{
              background: index === 3 ? "blue" : "white",
              color: index === 3 ? "white" : "black",
            }}
            onClick={() => {
              setIndex(3);
            }}
          >
            FAQs
          </h3>
        </div>

        <div className={contact.detailsContainer}> 
          <h2>
            {(index === 1 && "Partner Onboarding") ||
              (index === 2 && "Legal") ||
              (index === 3 && "FAQs")}
          </h2>
          <section>
            {dynamicContactData.map((singleData) => {
              return <ContactDynamicData key={singleData.id} {...singleData} /> 
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
