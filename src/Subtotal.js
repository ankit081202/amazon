import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { getbasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
function Subtotal() {

  const history = useHistory();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat 
          renderText={(value) => (
              <>
                  <p>
                      Subtotal ({basket.length} items):<strong>{value}</strong>
                  </p>
                  <small className='subtotal_gift'>
                    <input type='checkbox' /> this order contains a gift
                  </small>
              </>
          )}
          decimalScale={2}
          value = {getbasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}     
          prefix={'$'}
        />
        <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal