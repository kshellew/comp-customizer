import React from 'react'
import SelectedOptions from '../SelectedOptions/SelectedOptions.js';
import SummaryTotal from '../SummaryTotal/SummaryTotal.js'


export default function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
       return <SelectedOptions 
            feature={feature}
            idx={idx}
            selected={props.selected}
            currency={props.currency} />
      });
    return (
    <section className="main__summary">
        <h2>Your cart</h2>
        {summary} 
        <SummaryTotal 
            selected={props.selected}
            currency={props.currency}
        />
    </section>
    )
}
    