import React from 'react'
import './ourfamily.css'
import { familyMembers } from './familyData'

const OurFamily = () => {
  return (
    <div className="family-container">
      <h1 className="text-center">Meet Our Family</h1>
      <div className="family-members">
        {familyMembers.map((member, index) => (
          <div key={index} className="family-member">
            <div className="family-member-img-container">
              <img
                src={member.imgSrc} // Image is being sourced from the public/assets folder
                alt={member.name}
                className="family-member-img"
              />
            </div>
            <div className="family-member-info">
              <h3 className="family-member-name">{member.name}</h3>
              <p className="family-member-role">{member.role}</p>
              <p className="family-member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurFamily
