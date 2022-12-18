import { useState } from 'react';

const TagButton = (props) => {
  let [selected, setSelected] = useState(false);

  let tagClass =
    'border  whitespace-nowrap border-black rounded-full px-2 radius-32 mr-1 mb-1 hover:cursor-pointer hover:bg-gray-100';

  const getMatchingProj = (tagList) => {
    let projList = [];
    for (let projObj of props.allProjects) {
      if (props.locations.includes(projObj.location)) {
        projList = [...projList, projObj];
      }

      for (let projTag of projObj.tags) {
        if (tagNames.includes(projTag.name)) {
          projList = [...projList, projObj];
        }
      }
    }
    return projList;
  };

  const tagClicked = () => {
    if (selected) {
      // check if there are no more selected
      let newTagList = props.selectedTags.filter((tag) => tag !== props.tag);
      if (props.selectedTags.length === 1) {
        props.setSelectedProjects(props.allProjects);
      } else {
        props.setSelectedProjects(getMatchingProj(newTagList));
      }
      props.setSelectedTags(newTagList);
    } else {
      // add the project to list
      let newTagList = [...props.selectedTags, props.tag];
      props.setSelectedProjects(getMatchingProj(newTagList));
      props.setSelectedTags(newTagList);
    }

    selected = setSelected(!selected);
  };

  return (
    <span
      className={selected ? tagClass + 'bg-yellow-300' : tagClass}
      onClick={tagClicked}
    >
      {props.tag} {selected && '✕'}
    </span>
  );
};

export default TagButton;
