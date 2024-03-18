import React, { useState } from 'react';
import '../About.css'; // Make sure the path to About.css is correct

const teamMembers = [
  {
    id: 1,
    name: 'Brian Deng',
    role: 'Co-President',
    description: 'Brian Deng is a junior at Monta Vista High School. Most of what he likes is related to technology. He does cybersecurity challenges. Brian is also learning about making iOS apps. He likes to play video games, watch videos about computer hardware, read books, and talk online during his free time. He refurbishes computers and helps manage computer donations as part of his role in the IT Club.',
    imageUrl: './profilepics/kathy.png', // Add path to image
  },
  {
    id: 2,
    name: 'Kathy W',
    role: 'Co-President',
    description: 'Kathy is a junior at Saratoga High School.  She is passionate about music, reading, baking.  She is currently a reporter for the Saratoga falcon, and is part of the SHS cross country.  Outside of school, Kathy enjoys playing the flute at CPYO. During her free time, Kathy loves to bake as well as reading random news articles.  At the IT club, she helps maintain The IT Club website and manage volunteer hours.',
    imageUrl: './profilepics/brian.png', // Add path to image
  },
  {
    id: 3,
    name: 'Ben G',
    role: 'VP of Outreach',
    description: 'Ben is a freshman at Saratoga High School. He currently manages the IT Club outreach initiatives and communication channels.',
    imageUrl: './profilepics/ben.png', // Add path to image
  },
  {
    id: 4,
    name: 'Rick L',
    role: 'VP of Partnerships',
    description: 'Rick is a senior at Saint Francis High School. He loves playing water polo, lifting, and cooking. In School, he is on the board of the SFHS 3D Printing Club, and the starting goalie for the varsity water polo team. Outside of school, he is the co-founder and president of the Quantum Auxilia Leo Club, a volunteering organization. He also enjoys playing chess with grandmasters (currently at a whopping 600 rating).',
    imageUrl: './profilepics/rick.png', // Add path to image
  },
  {
    id: 5,
    name: 'Eamon W',
    role: 'VP of Operations and Branding',
    description: 'Eamon is an 8th grader at The Masters School in Dobbs Ferry, New York. He is in the Robotics team, a first-of-its-kind Geometry class, and a cross-country runner. At The IT Club, Eamon has lead club meetings, fixed up dozens of computers, and has lead the IT Clubs first ever brand refresh, and has made substantial changes to the website.',
    imageUrl: './profilepics/eamon.png', // Add path to image
  },
];

const branchMembers = [
  {
    id: 1,
    name: 'Brian Deng',
    role: 'Co-President',
    description: 'Brian Deng is a junior at Monta Vista High School. Most of what he likes is related to technology. He does cybersecurity challenges. Brian is also learning about making iOS apps. He likes to play video games, watch videos about computer hardware, read books, and talk online during his free time. He refurbishes computers and helps manage computer donations as part of his role in the IT Club.',
    imageUrl: '/images/brian.png', // Add path to image
  },
]

const ProfileCard = ({ name, role, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="profileCard">
      <div className="avatar" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <h3 className="memberName">{name}</h3>
      <p className="memberRole">{role}</p>
      <p className="memberDescription">{isExpanded ? description : `${description.substring(0, 100)}...`}</p>
      <button onClick={toggleExpansion} className="readMore">{isExpanded ? 'read less' : 'read more'}</button>
    </div>
  );
};

const TeamSection = ({ title, teamMembers }) => {
  return (
    <div className="teamSection">
      <h2 className="sectionTitle">{title}</h2>
      <div className="profileContainer">
        {teamMembers.map(member => (
          <ProfileCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

const CoreTeamHeader = () => {
  return (
    <div className="coreTeamHeader">
      <h1 className="academicYear">2023–2024 Academic Year</h1>
      <h2 className="coreTeamTitle">Core Team</h2>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homePage">
      <CoreTeamHeader />
      <TeamSection title="Meet Our Team" teamMembers={teamMembers} />
      <TeamSection title="Branch Directors" teamMembers={branchMembers} />
    </div>
  );
};

export default HomePage;

