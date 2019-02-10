import React from 'react';

import ConsonantTable from '../components/ConsonantTable';
import Header from '../components/Header';
import RimeTable from '../components/RimeTable';
import ToneBox from '../components/ToneBox';
import ToneBoxRow from '../components/ToneBoxRow';

import ConsonantData from '../data/ConsonantData.json';
import RimeData from '../data/RimeData.json';
import ToneBoxData from '../data/ToneBoxData.json';

const TaiToneBoxData = ToneBoxData.tai;
const GuiliuToneBoxData = ToneBoxData.guiliu;

export default class Documentation extends React.Component {
  renderGuiliuToneBox() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Dialect</th>
            {['1', '2', '3', '4'].map((number) => (
              <th key={number}>
                {`Guiliu Tone ${number}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <ToneBoxRow title='Debao Urban'>
            {GuiliuToneBoxData['debao_urban']}
          </ToneBoxRow>
          <ToneBoxRow title='Debao Ma-ai'>
            {GuiliuToneBoxData['debao_maai']}
          </ToneBoxRow>
          <ToneBoxRow title='Debao Jingde'>
            {GuiliuToneBoxData['debao_jingde']}
          </ToneBoxRow>
          <ToneBoxRow title='Jingxi Urban'>
            {GuiliuToneBoxData['jingxi_urban']}
          </ToneBoxRow>
          <ToneBoxRow title='Napo Urban'>
            {GuiliuToneBoxData['napo_urban']}
          </ToneBoxRow>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <Header subpage='/documentation' />
        <hr />
        <div className='container'>
          <h2>Initials</h2>
          <div className='col-md-6'>
            <h3 id='diu'>Simple Initials</h3>
            <ConsonantTable>
              {ConsonantData.simple}
            </ConsonantTable>
          </div>
          <div className='col-md-6'>
            <h3>Labialized Initials</h3>
            <ConsonantTable>
              {ConsonantData.labialized}
            </ConsonantTable>
            <h3>Palatalized Initials</h3>
            <ConsonantTable>
              {ConsonantData.palatalized}
            </ConsonantTable>
            <h3>Initials for Guiliu Mandarin loanwords</h3>
            <ConsonantTable isGuiliu={true}>
              {ConsonantData.guiliu}
            </ConsonantTable>
          </div>
        </div>
        <hr />

        <div className='container'>
          <h2>Tones</h2>
          <h3>Tone Boxes for Tai words</h3>
          <div className='col-md-6'>
            <ToneBox title='Debao Urban'>
              {TaiToneBoxData['debao_urban']}
            </ToneBox>
            <ToneBox title='Debao Ma-ai'>
              {TaiToneBoxData['debao_maai']}
            </ToneBox>
            <ToneBox title='Debao Suburb'>
              {TaiToneBoxData['debao_suburb']}
            </ToneBox>
          </div>
          <div className='col-md-6'>
            <ToneBox title='Jingxi Urban'>
              {TaiToneBoxData['jingxi_urban']}
            </ToneBox>
            <ToneBox title='Jingxi Hurun'>
              {TaiToneBoxData['jingxi_hurun']}
            </ToneBox>
            <ToneBox title='Napo Urban'>
              {TaiToneBoxData['napo_urban']}
            </ToneBox>
          </div>
          <h3>Tone Boxes for Guiliu words</h3>
          {this.renderGuiliuToneBox()}
        </div>
        <hr />

        <div className='container'>
          <h2>Rimes</h2>
          <RimeTable>
            {RimeData}
          </RimeTable>
        </div>
        <hr />
      </div>
    );
  }
}
