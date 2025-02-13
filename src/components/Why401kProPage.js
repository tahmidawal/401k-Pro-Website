import React from 'react';
import MissionStatement from './MissionStatement';
import IndustryIssueOverview from './IndustryIssueOverview';
import FragmentedEcosystemCombined from './FragmentedEcosystemCombined';
import WorkflowIntegration from './WorkflowIntegration';

const Why401kProPage = () => {
  return (
    <div className="font-roboto font-light">
      <div>
        <MissionStatement />
        <IndustryIssueOverview />
        <div className="mt-20">
          <FragmentedEcosystemCombined />
        </div>
        <WorkflowIntegration />
      </div>
    </div>
  );
};

export default Why401kProPage;