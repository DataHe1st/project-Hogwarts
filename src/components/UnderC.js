import React from 'react';
import './styles/underc.styles.css'
import { Sponsors } from './Sponsors';

export const UnderC = () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <section className='under-c'>Under Construction ...
    
    <h1>Data Heist</h1>

    <Sponsors/>

    <div 
	class="apply-button" 
	data-hackathon-slug="dataheist" 
	data-button-theme="light"></div>
    </section>
  )
}
