import React from 'react';
import pages from '../components/resources-list';

const linkstyle = {
  color: '#298bf5',
};

const Link = (props) => {
  return (
    <a href={props.page} target="_blank" style={linkstyle}>
      {props.name}
    </a>
  );
};

const ResourceList = () => {
  return pages.map((page, index) => {
    if (index == pages.length - 1) {
      return (
        <span style={{ display: 'inline-block' }} key={index}>
          and&nbsp;
          <Link name={page.name} page={page.url} />.
        </span>
      );
    } else {
      return (
        <span style={{ display: 'inline-block' }} key={index}>
          <Link name={page.name} page={page.url} />
          ,&nbsp;
        </span>
      );
    }
  });
};

export default ResourceList;
