import { useState } from 'react';

const TagButton = (props) => {
  let [selected, setSelected] = useState(false);

  //   console.log(props);

  
  const getMatchingProj = (tagList) => {
    let projList = [];
    for (let projObj of props.allProjects) {
      if (tagList.includes(projObj.location)) {
        projList = [...projList, projObj];
      }

      for (let projTag of projObj.tags.split(', ')) {
        if (tagList.includes(projTag)) {
          projList = [...projList, projObj];
        }
      }

      if (tagList.includes(projObj.year)) {
        projList = [...projList, projObj];
      }
    }
    return [...new Set(projList)];
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
      console.log(newTagList);
      props.setSelectedProjects(getMatchingProj(newTagList));

      console.log('matching projcss..', getMatchingProj(newTagList));

      props.setSelectedTags(newTagList);
    }

    selected = setSelected(!selected);
  };

  let tagClass =
    `whitespace-nowrap rounded-md px-2 mr-1 mb-1 
    hover:cursor-pointer border-[1.2px] border-gray-400 `;

  return (
    <span
      className={
        selected
          ? tagClass + ' bg-gray-300 '
          : tagClass + 'bg-gray-100 hover:bg-gray-300 hover:cursor-pointer text-gray-500'
      }
      onClick={tagClicked}
    >
      {props.tag} {selected && <span className=" text-xs">✕ </span>}
    </span>
  );
};

export default TagButton;
