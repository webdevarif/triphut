import React from "react";
import { DefaultPageContent, HeroSection, SubmitSection } from "../../components/index";

function SubmitRequest() {
  return (<>
    <HeroSection title="Submit Travel Request"/>
    <DefaultPageContent>
        <div className="container">
            <SubmitSection />
        </div>
    </DefaultPageContent>
  </>
  );
}

export default SubmitRequest;
