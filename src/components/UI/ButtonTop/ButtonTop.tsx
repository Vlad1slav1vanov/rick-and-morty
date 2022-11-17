import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const ButtonTop: FC = () => {
  return (
    <button onClick={() => window.scroll(0,0)} className="button-top">
      <svg className="button-top__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="100"> 
        <g>
          <path stroke="#222222" strokeWidth="2" strokeLinejoin="round" fillRule="nonzero" d="M53.34857156263608,412.57226688400823 C58.28477108431078,412.5698820386292 69.64519846321649,412.52880619898576 75.1838872803942,412.5245008680564 C75.1838872803942,414.50561265650134 75.1838872803942,416.4867547556418 75.1838872803942,418.46789564235337 C79.134360007562,414.5269065250255 83.08483152230211,410.5859186201215 87.03530546189755,406.6449282903656 C83.16424796459167,402.8059601182409 79.29322320283467,398.9669628478528 75.42219722865002,395.1279946757289 C75.3268955580182,396.955014172086 75.23159509981396,398.78203609330075 75.13629585403793,400.6090846879226 C67.91865649154234,400.56489654625307 60.69444213337475,400.73970074154334 53.48276549053911,400.40597636687545 C53.55732373484629,391.667985345086 71.699706990188,385.5652339174235 79.26849573893304,390.7857622949189 C83.44435757185586,393.7665062117037 86.77340288211128,397.67101580298277 88.04770566684014,402.49091076815955 C88.42070300109174,405.17595204442637 88.34492262961557,407.9212970519759 88.11877211923557,410.61707316351027 C87.31442451569274,415.02187651548724 84.33600724775503,418.7494868363266 80.89656675384475,421.47874898981127 C78.42490427407266,423.39580094581174 75.4182701751771,424.7505689228294 72.24358025383033,424.7159807840608 C63.11833859719461,425.84160597902417 57.19004218563058,420.4893230782485 53.34857156263608,412.57226567158074 L53.34857156263608,412.57226688400823 z" transform="translate(150.6666702849431,162.38373295258725) scale(0.005) translate(-150.6666702849431,-162.38373295258725)"/>
          <path stroke="#222222" strokeWidth="2" strokeLinejoin="round" fillRule="nonzero" d="M2.0481295345863195,49.406909190231076 L25.218841880907526,0.8300337788712042 L48.38955422722962,49.406909190231076 L36.80419727391608,49.406909190231076 L36.80419727391608,98.2175274682965 L13.633486487900349,98.2175274682965 L13.633486487900349,49.406909190231076 L2.0481295345863195,49.406909190231076 z"/>
        </g>
      </svg>
    </button>
  )
}

export default observer(ButtonTop);