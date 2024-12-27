import React from 'react';
import MissionStatement from './MissionStatement';
import IndustryIssueOverview from './IndustryIssueOverview';
import FragmentedEcosystemCombined from './FragmentedEcosystemCombined';

const Why401kProPage = () => {
  return (
    <div className="font-roboto font-lightflex">
      <div>
        <MissionStatement />
        <IndustryIssueOverview />
        <div className="mt-20">
          <FragmentedEcosystemCombined />
        </div>
      </div>
    </div>
  );
};

export default Why401kProPage;