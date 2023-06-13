import React from 'react'
import { Clubs, countries } from './data/Constdata';

export default function Table() {

  return (
    <div className="bg-gray-400 grig grid-cols-1 divide-y text-black">
      {Clubs.map((club, index) => (
        <div>
          <div key={index} className="bg-white-400 py-2">
            <h2>{club.name}</h2>
            <img src={club.url} alt={club.name} />
            <a href={club.path}>Team page</a>
          </div>
          <div>
            {countries.map((club, index) => (
              <div key={index} className="bg-white-400 py-2">
                <h2>{club.country}</h2>
                <img src={club.flag} alt={club.country} />
                <a href={club.code}>Team page</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
