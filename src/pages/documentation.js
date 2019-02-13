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
  renderInitialsIntro() {
    return (
      <div className='container'>
        <h2>Initials</h2>
        <p>
          There are 4 types of initials in Yang Zhuang, namely simple initials,
          labialized initials, palatalized initials and initials for Guiliu
          Mandarin loanwords. Simple initials are written with simple initial
          letters while the other initials are written with combinations of
          simple initial letters.
          Each simple initial letter has a consonantal class
          which affects the tone of the syllable. Some initial
          phonemes are represented by more than one letters which
          have different consonantal classes.
        </p>
        <p>
          There are 4 consonantal classes. Consonantal classes are only
          applicable to native Tai words but not Guiliu Mandarin loanwords.
          The spelling rules of these two categories of words will be explained
          at the bottom.
        </p>
        <div className='col-md-6'>
          <h3>Consonantal Classes</h3>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className='warning'>
                <th>1A</th>
                <th>From proto voiceless aspirated consonants</th>
              </tr>
              <tr className='danger'>
                <th>1U</th>
                <th>From proto voiceless unaspirated stops or continuants</th>
              </tr>
              <tr className='success'>
                <th>1G</th>
                <th>From proto glottalized consonants</th>
              </tr>
              <tr className='info'>
                <th>2</th>
                <th>From proto voiced consonants</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  renderInitialsBody() {
    return (
      <div className='container'>
        <p>
          The following list shows all Yang Zhuang initials and their corresponding
          letters. There are 23 simple initial phonemes and 37 simple initial letters.
        </p>
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
    );
  }

  renderRimes() {
    return (
      <div className='container'>
        <h2>Rimes</h2>
        <p>
          Yang Zhuang has 12 vowel phonemes and 14 basic vowel letters.
          Each vowel letter carries a D-Value, which is either long or short.
          D-Value only affects the tone of syllables ending with -p, -t and -k
          and it does not affect the quality of the vowel.
          All vowels except /ə/ and /ʊ/
          are either long or short. These vowels only have one representation.
          As /ə/ and /ʊ/ can be both long or short, there are two representations
          for their long and short counterparts respectively.
        </p>
        <RimeTable>
          {RimeData}
        </RimeTable>
        <h4>Notes</h4>
        <p class="bg-danger" style={{ padding: '15px' }}>
          Red cells: Double vowel letters are shortened to single.
        </p>
        <p class="bg-info" style={{ padding: '15px' }}>
          Blue cell:
          <ul>
            <li>
              oh: This letter combination is from 'o (main vowel) + h (Guiliu loanword marker)'.
              It is not pronounced as /o/ as in usual rules but /ɔ/.
            </li>
            <li>
              oa: It is pronounced as either /ɔ/ or /a/ depending on the dialect.
              This letter combination will be explained below.
            </li>
          </ul>
        </p>
        <h3>Speical Vowel Letters: oa, oaa</h3>
        <p>
          There are two special vowel letters, 'oa' and 'oaa'. They represent
          words with labialized initials in the proto language. Nowadays, the
          labialization is lost in most dialects and have different reflexes across
          dialects.
        </p>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Dialect</th>
              <th>-oa- equivalent to</th>
              <th>-oaa- equivalent to</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Debao mainstream</th>
              <th className='danger'>-o-</th>
              <th>-o-</th>
              <th>Delete all 'a'</th>
            </tr>
            <tr>
              <th>Jingxi, Napo</th>
              <th>-a-</th>
              <th>-aa-</th>
              <th>Delete all 'o'</th>
            </tr>
            <tr>
              <th>Debao Nalei-Ronghua, Tiandeng Longming, Cao Bằng</th>
              <th>-wa-</th>
              <th>-waa-</th>
              <th>Change 'o' to 'w'</th>
            </tr>
          </tbody>
        </table>
        <p class="bg-danger" style={{ padding: '15px' }}>
          In Debao mainstream dialects, the rule applies except when the syllable
          ends with -oa. In this case, it does not simplify into -o but should
          be pronounced as /ɔ/.
        </p>
        <h4>Examples</h4>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Syllable</th>
              <th>Debao mainstream equivalent</th>
              <th>Jingxi equivalent</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>zloa</th>
              <th>zloa (oa pronounced as /ɔ/)</th>
              <th>zla</th>
              <th>canoe</th>
            </tr>
            <tr>
              <th>zloáay</th>
              <th>zlóy</th>
              <th>zláay</th>
              <th>left side</th>
            </tr>
            <tr>
              <th>phoan</th>
              <th>phon</th>
              <th>phan</th>
              <th>dream</th>
            </tr>
            <tr>
              <th>toàan</th>
              <th>tòn</th>
              <th>tàan</th>
              <th>folk song festival</th>
            </tr>
            <tr>
              <th>sloaak</th>
              <th>slok</th>
              <th>slaak</th>
              <th>clear (a.)</th>
            </tr>
            <tr class='danger'>
              <th>ngwoan</th>
              <th>won</th>
              <th>wan</th>
              <th>daytime (Napo: ngon)</th>
            </tr>
            <tr class='danger'>
              <th>khwoan</th>
              <th>khon</th>
              <th>khwan</th>
              <th>soul</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderToneBoxes() {
    return (
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
    );
  }

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
        {this.renderInitialsIntro()}
        {this.renderInitialsBody()}
        <hr />
        {this.renderRimes()}
        <hr />
        {this.renderToneBoxes()}
        <hr />
      </div>
    );
  }
}
