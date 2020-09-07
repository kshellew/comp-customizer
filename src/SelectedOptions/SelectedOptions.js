import React from 'react'


export default function SummaryOptions(props) {
    const featureHash = props.feature + '-' + props.idx;
    const selectedOption = props.selected[props.feature];

    return (
        <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
            {props.currency.format(selectedOption.cost)}
        </div>
        </div>
    );
}

    