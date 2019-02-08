import React from 'react';

import ConsonantTable from '../components/ConsonantTable';
import Header from '../components/Header';

import ConsonantData from '../data/ConsonantData.json';

export default class Documentation extends React.Component {
  render() {
    return (
      <div>
        <Header subpage='/documentation/' />
        <hr />
        <div className="container">
          <h2>Initials</h2>
          <h3 id="diu">Simple Initials</h3>
          <ConsonantTable>
            {ConsonantData.simple}
          </ConsonantTable>
          <h3>Labialized Initials</h3>
          <ConsonantTable>
            {ConsonantData.labialized}
          </ConsonantTable>
          <h3>Palatalized Initials</h3>
          <ConsonantTable>
            {ConsonantData.palatalized}
          </ConsonantTable>
        </div>
        <hr />
      </div>
    );
  }
}
