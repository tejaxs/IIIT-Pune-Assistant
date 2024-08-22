import React from 'react';
import {Slideshow} from '../components/Slideshow';
import { Card } from '../components/Card';
import { InfoDesk } from '../components/InfoDesk';

export const Home = () => {

  const card1 = [
    { 
      text: "Advt. for Appointment to the Post of The Director, IIIT Pune"
    },
    {
      text: "Notice for cancellation of advertisement for the post of Director of IIIT (PPP), Pune, Maharashtra"
    },
    {
      text: "Placement Statistics for 2023 Batch"
    },
    {
      text: "IIIT Pune congratulates the team, 'Stoners Clan', for being shortlisted in the Grand Finale for Smart India Hackathon 2022"
    },
    {
      text: "Indian Institute of Information Technology, Pune welcomes Prof. O.G. Kakde as Director of IIIT Pune"
    },
    {
      text: "E-Summit'22: Making Impossible Inevitable With E-Cell IIIT Pune"
    },
    {
      text: "AKTU students will soon be able to intern at IIIT Pune."
    },
  ]

  const card2 = [
    { 
      img: "https://www.iiitp.ac.in/sites/default/files/inline-images/clg-pic_0.jpg",
      text: "To address the challenges faced by the Indian IT industry and growth of the domestic IT market, the Ministry of Education (MoE), Government of India intends to establish twenty Indian Institutes of Information Technology(IIIT), on a Not-for-profit Public Private Partnership (N-PPP) basis. The partners in setting up the IllTs would be the Ministry of Education (MoE), Governments of the respective States where each lllT will be established, and the industry.",
    },
  ]

  const card3 = [
    { 
      text: "IIITP M.Tech.Admission Brochure August 2023-24"
    },
    {
      text: "DASA-2023 Instructions for Physical Reporting"
    },
    {
      text: "JoSAA 2023: Instructions for B.Tech First Year Students"
    },
    {
      text: "Syllabus for Ph.D. Entrance Examination- 2023"
    },
    {
      text: "IIITP Ph.D. Admission Brochure July 2023"
    },
  ]

  const card4 = [
    { 
      text: "STUDENTS ACHIEVEMENTS",
    },
    {
      text: "FACULTY ACHIEVEMENTS"
    },
  ]
    
  
  return (
    <div className='home-content'>
        <div className='upper-home-content'>
            <Slideshow />
            <Card title="Latest News" content={card1}/>
        </div>
        <div className='lower-home-content'>
            <Card title="Welcome IIIT Pune" content={card2}/>
            <Card title="Admissions 2023-24" content={card3}/>
            <Card title="Achievements" content={card4}/>
        </div>
        <InfoDesk />
    </div>
  )
}
