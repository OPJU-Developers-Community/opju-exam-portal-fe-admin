// styled component
import FilterTab from "@/organisms/FilterTab/FilterTab";
import XHeader from "@/organisms/XHeader/XHeader";

const tabs = [
  {
    query: "all",
    value: "All",
  },
  {
    query: "question-setter",
    value: "Question Setter",
  },
  {
    query: "question-verifier",
    value: "Question Verifier",
  },
  {
    query: "examiner",
    value: "Examiner",
  },
];

const DashboardTemplate = () => {
  return (
    <div>
      <XHeader />
      <FilterTab tabs={tabs} />
    </div>
  );
};

export default DashboardTemplate;
