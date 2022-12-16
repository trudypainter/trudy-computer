import { useState } from 'react';
import './TagButton.css';

const TagButton = (props) => {
  let [selected, setSelected] = useState(false);

  const getMatchingProj = (tagList) => {
    let projList = [];
    let tagNames = tagList.map((tag) => tag.name);
    for (let projObj of props.allProjects) {
      if (tagNames.includes(projObj.location.name)) {
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
    <div>
      {props.filterBar ? (
        <div
          className={selected ? 'selectedText' : 'text'}
          onClick={tagClicked}
        >
          {props.tag.name} {selected && '✕'}
          {/* <div
            className="tag"
            // style={{
            //   backgroundColor: "white",
            // }}
          ></div> */}
        </div>
      ) : (
        <div className="listText">
          {props.tag.name}
          {/* <div
            className="tag"
            // style={{
            //   backgroundColor: "white",
            // }}
          ></div> */}
        </div>
      )}
    </div>
  );
};

export default TagButton;
