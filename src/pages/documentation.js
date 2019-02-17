import React from 'react';

import ConsonantTable from '../components/ConsonantTable';
import Header from '../components/Header';
import Ipa from '../components/Ipa';
import KeyTable from '../components/KeyTable';
import RimeTable from '../components/RimeTable';
import ToneBox from '../components/ToneBox';
import ToneBoxRow from '../components/ToneBoxRow';
import ToneCategoryTable from '../components/ToneCategoryTable';
import Yang from '../components/Yang';

import UITextConstants from '../constants/UITextConstants';

import ConsonantData from '../data/ConsonantData.json';
import RimeData from '../data/RimeData.json';
import ToneBoxData from '../data/ToneBoxData.json';
import ToneExampleData from '../data/ToneExampleData.json';

const TaiToneBoxData = ToneBoxData.tai;
const GuiliuToneBoxData = ToneBoxData.guiliu;

const { PhonationToTableClass } = UITextConstants;

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
                <td>1A</td>
                <td>From proto voiceless aspirated consonants</td>
              </tr>
              <tr className='danger'>
                <td>1U</td>
                <td>From proto voiceless unaspirated stops or continuants</td>
              </tr>
              <tr className='success'>
                <td>1G</td>
                <td>From proto glottalized consonants</td>
              </tr>
              <tr className='info'>
                <td>2</td>
                <td>From proto voiced consonants</td>
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
          <h3>Simple Initials</h3>
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
          <KeyTable
            fields={['ipa', 'letter', 'example', 'meaning']}
            labels={['IPA', 'Letter', 'Example', 'Meaning']}
          >
            {ConsonantData.guiliu}
          </KeyTable>
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
          Each vowel letter carries a tenseness, which is either tense or lax.
          Tenseness only affects the tone of syllables ending
          with <Yang>-p</Yang>, <Yang>-t</Yang> and <Yang>-k</Yang> and
          it does not affect the quality nor the actual length of the vowel.
          All vowels except <Ipa>/ə/</Ipa> and <Ipa>/ʊ/</Ipa> are
          either tense or lax. These vowels only have one representation.
          As <Ipa>/ə/</Ipa> and <Ipa>/ʊ/</Ipa> can be both tense and lax, there are two representations
          for their tense and lax counterparts respectively.
        </p>
        <RimeTable>
          {RimeData}
        </RimeTable>
        <h4>Notes</h4>
        <p className="bg-danger" style={{ padding: '15px' }}>
          Red cells: Double vowel letters are shortened to single.
        </p>
        <div className="bg-info" style={{ padding: '15px' }}>
          Blue cell:
          <ul>
            <li>
              <Yang>oh</Yang>: This letter combination is from '<Yang>o</Yang> (main vowel) + <Yang>h</Yang> (Guiliu loanword marker)'.
              It is not pronounced as <Ipa>/o/</Ipa> as in usual rules but <Ipa>/ɔ/</Ipa>.
            </li>
            <li>
              <Yang>oa</Yang>: It is pronounced as either <Ipa>/ɔ/</Ipa> or <Ipa>/a/</Ipa> depending on the dialect.
              This letter combination will be explained below.
            </li>
          </ul>
        </div>
        <h3>Speical Vowel Letters: <Yang>oa</Yang> and <Yang>oaa</Yang></h3>
        <p>
          There are two special vowel letters, <Yang>oa</Yang> and <Yang>oaa</Yang>. They represent
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
              <td>Debao mainstream</td>
              <td className='danger'><Yang>-o-</Yang></td>
              <td><Yang>-o-</Yang></td>
              <td>Delete all <Yang>a</Yang></td>
            </tr>
            <tr>
              <td>Jingxi, Napo</td>
              <td><Yang>-a-</Yang></td>
              <td><Yang>-aa-</Yang></td>
              <td>Delete all <Yang>o</Yang></td>
            </tr>
            <tr>
              <td>Debao Nalei-Ronghua, Tiandeng Longming, Cao Bằng</td>
              <td><Yang>-wa-</Yang></td>
              <td><Yang>-waa-</Yang></td>
              <td>Change <Yang>o</Yang> to <Yang>w</Yang></td>
            </tr>
          </tbody>
        </table>
        <p className="bg-danger" style={{ padding: '15px' }}>
          In Debao mainstream dialects, the rule applies except when the syllable
          ends with <Yang>-oa</Yang>. In this case, it does not simplify into <Yang>-o</Yang> but should
          be pronounced as <Ipa>/ɔ/</Ipa>.
        </p>
        <h4>Examples</h4>
        <KeyTable
          fields={['syllable', 'debao', 'jingxi', 'meaning']}
          labels={['Syllable', 'Debao mainstream equivalent', 'Jingxi equivalent', 'Meaning']}
          setRowClass={(row, index) => (
            (row.syllable === '<yang>khwoan</yang>' || row.syllable === '<yang>ngwoan</yang>') ? 'danger' : ''
          )}
        >
          {ToneExampleData.vowelAlternation}
        </KeyTable>
        <h3>Wait! How about the tenseness...</h3>
        <div className="bg-info" style={{ padding: '15px' }}>
          There is an easy way to determine the tenseness of a vowel.
          <ol>
            <li>
              If the vowel is <Yang>oa</Yang> or <Yang>oaa</Yang>, convert into its pronunciation
              spelling. For example, convert <Yang>soak</Yang> to <Yang>sok</Yang> (Debao) or <Yang>sak</Yang> (Jingxi).
            </li>
            <li>
              If the vowel is <Yang>i</Yang>, then it is tense.
            </li>
            <li>
              Otherwise, a single-letter vowel is lax and double-letter vowel is tense.
            </li>
          </ol>
        </div>
      </div>
    );
  }

  renderToneBoxes() {
    return (
      <div className='container'>
        <h2>Tones</h2>
        <p>
          Yang Zhuang words are classified into three categories: Native Tai
          words, loanwords from Guiliu Mandarin and exceptional words. Every category
          has its own rule to represent tones.
        </p>
        <h3>Tones of Tai Words</h3>
        <p>
          Most Yang Zhuang dialects have a 6-tone system which is derived from
          an earlier 3-tone system through a tonal split according to the phonation
          of the initial consonant. As different Yang Zhuang dialects have
          different tonal split patterns, the same tone in a certain dialect
          may correspond to different tones in another dialect. Therefore, it is
          impossible to account for all Yang Zhuang dialects if we write tones
          according to a single 'standard' dialect.
        </p>
        <p>
          In this orthography, we only mark the tonal category from the original
          3-tone system. In syllables ending with a sonorant, there are 3 tonal
          categories A, B and C. In syllables ending with an obstruent, there
          are 2 tonal categories DL and DS based on the tenseness of the vowel.
        </p>
        <ToneCategoryTable>
          {ToneExampleData.category}
        </ToneCategoryTable>
        <h3>Tone Boxes for Tai Words</h3>
        <p>
          A tone box shows the tonal distribution of a Yang Zhuang dialect.
          The columns represent the tonal categories and the rows represent the
          consonantal class. Every cell represents the actual tone value of a
          specific combination of the tonal category and the consonantal class.
          Therefore, the actual tone of the syllable can be deduced given
          its consonantal class, tonal cateogory and the tone box of the dialect.
        </p>
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
        <h4>Examples please?</h4>
        <p>
          The examples below show how to deduce the actual tone value of a
          native Tai syllable.
        </p>
        <KeyTable
          fields={['syllable', 'class', 'category', 'dialect', 'value']}
          labels={['Syllable', 'Consonantal Class', 'Tonal Category', 'Dialect', 'Tone Value']}
          setRowClass={(row) => PhonationToTableClass[row.class]}
          colorTone={true}
        >
          {ToneExampleData.deduction}
        </KeyTable>
        <h3>Tones of Guiliu Words</h3>
        <p>
          Yang Zhuang has borrowed words from Guiliu Mandarin.
          Guiliu Mandarin uses 4-tone system. When Guiliu Mandarin words were
          borrowed into a Yang Zhuang, their tones are adapted to become some of the
          existing Tai tones. Again, every dialect has its own correspondence rules.
        </p>
        <KeyTable
          fields={['tone', 'example', 'rule']}
          labels={['Guiliu Tone', 'Example', 'Rule']}
        >
          {ToneExampleData.guiliuCategory}
        </KeyTable>
        <div className="bg-info" style={{ padding: '15px' }}>
          Consonantal class is irrelevant for Guiliu Mandarin loanwords. If there
          are more than one letter combinations to write the initial consonant, use the rule:
          <ol>
            <li>Use the combination with less letters.</li>
            <li>In case of a tie, use the combination with consonantal class 1A or 1U.</li>
          </ol>
          By rule 1, <Yang>yèenh</Yang> is written instead of <Yang>yhèenh</Yang>.
          <br />
          By rule 2, <Yang>kôh</Yang> is written instead of <Yang>gôh</Yang>.
        </div>
        <h3>Tone Boxes for Guiliu words</h3>
        {this.renderGuiliuToneBox()}
        <p className="bg-info" style={{ padding: '15px' }}>
          In Jingxi Urban dialect, tonal split has occured for Guiliu Tone 4
          syllables. The tone is pronounced as 33ʔ for voiceless-intial syllables,
          and 213ʔ for voiced-initial syllables.
        </p>
        <h4>Examples</h4>
        <p>
          The examples below show how to deduce the actual tone value of a
          Guiliu Mandarin loanword syllable.
        </p>
        <KeyTable
          fields={['syllable', 'tone', 'dialect', 'value']}
          labels={['Syllable', 'Guiliu Tone', 'Dialect', 'Tone Value']}
          colorTone={true}
        >
          {ToneExampleData.guiliuDeduction}
        </KeyTable>
        <h3>Where to put the tone mark?</h3>
        <ol>
          <li>If there is only 1 vowel letter, put it on that letter. Example: <Yang>tóy</Yang></li>
          <li>Otherwise, if the first 2 vowel letters are different, put it on the second letter. Example: <Yang>joèy</Yang></li>
          <li>If the first 2 vowel letters are the same, put it on the first letter. Example: <Yang>káang</Yang></li>
        </ol>
        <h3>Exceptional Words</h3>
        <p>
          There is a small set of words which do not follow the regular tonal
          reflex of Tai words or Guiliu Mandarin loanwords. These exceptional
          words are mostly onomatopoeias, sentence final particles and frequent
          words that underwent tone change. There is no rule to determine the
          tone of these words. The tone value has to be remembered word by word.
        </p>
        <KeyTable
          fields={['letter', 'example', 'rule']}
          labels={['Tone Letter', 'Example', 'Rule']}
        >
          {ToneExampleData.exceptionalCategory}
        </KeyTable>
        <p>
          The following shows some common exceptional words and their Debao Urban
          pronunciation.
        </p>
        <KeyTable
          fields={['word', 'ipa', 'meaning']}
          labels={['Word', 'IPA', 'Meaning']}
        >
          {ToneExampleData.exceptional}
        </KeyTable>
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
        <div className='container'>
          <div className="bg-danger" style={{ padding: '15px' }}>
            <h2 style={{ marginTop: '0px' }}>Warning!</h2>
            This is NOT a tutorial. This is a linguistic documentation of the orthography.
            The intended readers are expected to have certain linguistic knowledge.
          </div>
        </div>
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
