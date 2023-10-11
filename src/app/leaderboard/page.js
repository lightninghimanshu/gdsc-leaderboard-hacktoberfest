"use client";
import React, { useState } from 'react';
import NextLogo from '../../../public/next.svg';
import Image from 'next/image';
import Header from '@/components/Header';
const sampleData = [
  { rank: 1, name: 'User 1', score: 100, level: 'Beginner', location: 'New York' },
  { rank: 2, name: 'User 2', score: 90, level: 'Intermediate', location: 'Los Angeles' },
  { rank: 3, name: 'User 3', score: 80, level: 'Advanced', location: 'Chicago' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },
  { rank: 4, name: 'User 4', score: 70, level: 'Beginner', location: 'Houston' },

];

const Leaderboard = () => {
  const [data, setData] = useState(sampleData);

  return (
    <>
      <Header username={null} />
      <main className="flex min-h-screen flex-col items-center p-8">
        <Image src={NextLogo} alt="Logo" width={100} height={100} priority />

        <div className="w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Leaderboard</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-6 py-3 text-left">Rank</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Score</th>
                  <th className="px-6 py-3 text-left">Level</th>
                  <th className="px-6 py-3 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.rank} className="border-t">
                    <td className="px-6 py-4">{item.rank}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.score}</td>
                    <td className="px-6 py-4">{item.level}</td>
                    <td className="px-6 py-4">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Leaderboard;
