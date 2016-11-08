import { connect } from 'react-redux'
// import {  } from 'store/actions'
import PriceField from '../components/PriceField'

const getPrice = ({textfirst, textsecound, position, fontsize}) => {
  fontsize = fontsize || "1,5 cm"
  var price = 0
  var priceFirstLine = !textfirst ? 0
                      :fontsize === "1,5 cm" ? 3.39
                      :fontsize === "2,5 cm" ? 3.79
                      :fontsize === "3,5 cm" ? 4.29
                      : 4.29
  var priceSecoundLine = !textsecound ? 0
                        :fontsize === "1,5 cm" ? 3.39
                        :fontsize === "2,5 cm" ? 3.79
                        :fontsize === "3,5 cm" ? 4.29
                        : 4.29
  
  if(position === "auf der Brusttasche"){
    price += 3
  }

  price += priceFirstLine + priceSecoundLine

  // round price to last two zeros
  price = Math.round(price * 100) / 100

  // make price as string
  price = price.toString().replace(".", ",")

  return price
}

const mapStateToProps = (state, ownProps) => {
  return {
    price: getPrice(state.form || {})
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const ConnectedPriceField = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceField)


export default ConnectedPriceField