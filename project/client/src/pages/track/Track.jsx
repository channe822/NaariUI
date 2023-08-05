import React, { useState } from 'react'
import './track.css'
import Navbar from '../../components/Navbar';
export default function Track() {
    const [applicationId, setApplicationId] = useState('');
    const [trackingResult, setTrackingResult] = useState('');
    const trackApplication =async(e)=>{
        try{
            const response = await fetch('http://localhost:5000/server/complains/'+applicationId);
            if (response.ok) {
              const data = await response.json();
              const status=data.status;
              setTrackingResult(status);
            } else {
              console.error('Error fetching document:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching document:', error);
          }
        
    }
  return (
    <div className='body' >
    <Navbar/>
    <div className="application-tracker-container">
      <h2 className="title">Track Application</h2>
      <input
        type="text"
        value={applicationId}
        onChange={(e) => setApplicationId(e.target.value)}
        placeholder="Enter Application ID"
        className="input-field"
      />
      <button onClick={trackApplication} className="track-button">Track</button>
      {trackingResult && <p className="tracking-result">{trackingResult}</p>}
    </div>
    </div>
  )
}
