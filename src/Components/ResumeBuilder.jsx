
import ResumeSection from './ResumeSection';

const ResumeBuilder = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Passing the title and sectionName props to ResumeSection */}
      <ResumeSection title="Sales Representative" sectionName="salesRep" />
      <ResumeSection title="Sales Associate" sectionName="salesAssociate" />
    </div>
  );
};

export default ResumeBuilder;
