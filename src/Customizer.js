import React from 'react';
import Feature from './Feature'


export default function Customizer(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
      return <Feature 
          idx={idx}
          feature={feature} 
          features={props.features}
          selected={props.selected} 
          updateFeature={props.updateFeature} 
          currency ={props.currency}
      />
  });
  return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
      </form>
  );
}