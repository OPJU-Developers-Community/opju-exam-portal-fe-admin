// lib & others
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// styled component
import { FilterWrapper, StyledTab } from "./FilterTabStyle";

// types & interface
type FilterTabProp = {
  tabs: tabType[];
  mxWidth: string
};

type tabType = {
  query: string;
  value: string;
};

const FilterTab = (props: FilterTabProp) => {
  const [currentTab, setCurrentTab] = useState("all");
  const { tabs, mxWidth } = props;
  const router = useRouter();

  useEffect(() => {
    router.push({ query: { tab: "all" } });
  }, []);

  const handleTabChange = (query: string) => {
    router.push({ query: { tab: query } });
    setCurrentTab(query);
  };

  return (
    <FilterWrapper {...props}>
      {tabs.map((tab, _) => {
        const { value, query } = tab;

        return (
          <StyledTab
            key={query}
            active={currentTab === query ? true : false}
            onClick={() => handleTabChange(query)}
          >
            {value}
          </StyledTab>
        );
      })}
    </FilterWrapper>
  );
};

export default FilterTab;
