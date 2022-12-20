import { useState } from 'react';

const TagButton = (props) => {
  let [selected, setSelected] = useState(false);

  //   console.log(props);

  let tagClass =
    'border  whitespace-nowrap border-black  rounded-full px-2 radius-32 mr-1 mb-1 hover:cursor-pointer ';

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

  return (
    <span
      className={
        selected
          ? tagClass + ' bg-[#99f841]'
          : tagClass + 'bg-white hover:bg-gray-100'
      }
      onClick={tagClicked}
    >
      {props.tag} {selected && '✕'}
    </span>
  );
};

export default TagButton;
