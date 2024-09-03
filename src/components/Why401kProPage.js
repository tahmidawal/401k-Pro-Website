import React from 'react';
import MissionStatement from './MissionStatement';
import IndustryIssueOverview from './IndustryIssueOverview';
import FragmentedEcosystem from './FragmentedEcosystem';
import FragmentedEcosystemGraphic from './FragmentedEcosystemGraphic';

const Why401kProPage = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
      `}</style>
      <div className="font-roboto font-light bg-white py-20">
        <MissionStatement />
        <IndustryIssueOverview />
        <FragmentedEcosystem />
        <FragmentedEcosystemGraphic />
        
      </div>
    </>
  );
};

export default Why401kProPage;