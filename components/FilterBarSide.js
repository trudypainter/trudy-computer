import TagButton from './TagButton';
import { useEffect, componentDidMount } from 'react';

const FilterBarSide = (props) => {
  let locationsArray = props.allProjects.map((proj) => proj.location);
  let locations = [...new Set(locationsArray)];
  let topicsArray = props.allProjects
    .map((proj) => proj.tags.split(', '))
    .flat();
  let topics = [...new Set(topicsArray)];

  let yearsArray = props.allProjects.map((proj) => proj.year);
  let years = [...new Set(yearsArray)].sort((a, b) => b - a);

  console.log(locations);
  console.log(topics);

  return (
    <div
      className="-md:invisible -md:h-0 -md:p-0 
      visible w-[220px] mt-4 flex flex-col space-y-4"
      id="filterBar"
    >
      <div className="flex  flex-wrap">
        <span className="locationTitle mr-1">Location: </span>

        {locations.map((tag) => (
          <TagButton
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          ></TagButton>
        ))}
      </div>
      <div className="flex flex-wrap">
        <span className="locationTitle whitespace-normal mr-1">Years: </span>
        {years.map((tag) => (
          <TagButton
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          ></TagButton>
        ))}
      </div>
      <div className="flex flex-wrap">
        <span className="locationTitle whitespace-normal mr-1">Tags: </span>
        {topics.map((tag) => (
          <TagButton
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          ></TagButton>
        ))}
      </div>
    </div>
  );
};

export default FilterBarSide;
