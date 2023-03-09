import React from "react";
import {
  DefaultPageContent,
  HeroSection,
  VotingSection,
} from "../../components/index";

function SubmitRequest() {
  return (
    <>
      <HeroSection title="Sponsor a Travel Request" />
      <DefaultPageContent>
        <div className="container">
          <VotingSection />
        </div>
      </DefaultPageContent>
    </>
  );
}

export default SubmitRequest;
