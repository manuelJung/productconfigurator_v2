import React from 'react'
import DuckImage from '../../assets/Duck.jpg'
import './HomeView.scss'
import config from 'utils/config'

import ConnectedForm from '../../containers/ConnectedForm'
import ConnectedPriceField from '../../containers/ConnectedPriceField'
import ImageBox from 'components/ImageBox'
import InfoText from 'components/InfoText'

export const HomeView = () => (
  <div id="homeView">

    {/* LEFT VIEW */}
    <div className="left col-sm-7">
      <h3 className="headline">{ config.productname || 'no productname' }</h3>
      <hr className="hr"/>
      <ConnectedForm/>
    </div>

    {/* RIGHT VIEW */}
    <div className="right col-sm-5">
      <ImageBox
          headline="Personalisierungsort"
          src={config.exampleImageUrl}/>
      <ImageBox
          headline="Preistabelle"
          padding={5}
          src={config.priceImageUrl}/>
      <ConnectedPriceField/>
      <InfoText text={config.infoText}/>
    </div>

  </div>
)

export default HomeView
