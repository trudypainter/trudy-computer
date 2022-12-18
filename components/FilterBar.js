import TagButton from './TagButton';
import { useEffect, componentDidMount } from 'react';

const FilterBar = (props) => {
  let locationsArray = props.allProjects.map((proj) => proj.location);
  let locations = [...new Set(locationsArray)];
  let topicsArray = props.allProjects
    .map((proj) => proj.tags.split(', '))
    .flat();
  let topics = [...new Set(topicsArray)];

  console.log(locations);
  console.log(topics);

  return (
    <div
      id="filterBar"
      className="w-full border-black border-b border-r px-4 md:px-8 pt-3 pb-2 sticky top-0 backdrop-blur-sm bg-white/80"
    >
      <div className="flex flex-wrap">
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
          ></TagButton>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
