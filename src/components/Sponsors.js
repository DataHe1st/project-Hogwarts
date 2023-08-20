import React from 'react';
import './styles/sponsors.styles.css';
import devf from '../images/devf.png';
import filec from '../images/filecon.png';
import polyg from '../images/polyg.png';
import replit from '../images/replit.png';
import solana from '../images/solana.png';

export const Sponsors = () => {
  return (
    <div className='sponsor-cont'>
        <div className='spon'><img alt='sponsor' src={devf} /></div>
        <div className='spon'><img alt='sponsor' src={filec} /></div>
        <div className='spon'><img alt='sponsor' src={polyg} /></div>
        <div className='spon'><img alt='sponsor' src={replit} /></div>
        <div className='spon'><img alt='sponsor' src={solana} /></div>
    </div>
  )
}
