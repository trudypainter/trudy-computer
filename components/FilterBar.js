import TagButton from './TagButton';
import { useEffect } from 'react';

const FilterBar = (props) => {
  let locationsArray = props.allProjects.map((proj) => proj.location);
  let locations = [...new Set(locationsArray)];
  let topicsArray = props.allProjects
    .map((proj) => proj.tags.split(', '))
    .flat();
  let topics = [...new Set(topicsArray)];

  console.log(locations);
  console.log(topics);

  const handleScroll = () => {
    const filterBar = document.getElementById('filterBar');
    const position = filterBar.offsetTop - 42;
    if (window.pageYOffset >= position) {
      filterBar.classList.add('sticky');
    } else {
      filterBar.classList.remove('sticky');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="filterBar"
      className="w-full border-black border-b border-r px-8 py-4"
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
