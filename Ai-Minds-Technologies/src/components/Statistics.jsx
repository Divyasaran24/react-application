
import React, { useEffect, useState } from "react";

const Statistics = () => {
  const stats = [
    {
      value: 32,
      description: "Success in getting happy customers",
      delay: "0.1s",
    },
    {
      value: 25,
      description: "Thousands of successful businesses",
      delay: "0.3s",
    },
    {
      value: 120,
      description: "Total clients who love AI Minds",
      delay: "0.5s",
    },
    {
      value: 5,
      description: "Stars reviews given by satisfied clients",
      delay: "0.7s",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0)); // Initialize counts with zero for each stat

  useEffect(() => {
    const intervals = [];

    stats.forEach((stat, index) => {
      const targetValue = stat.value;
      const delay = parseFloat(stat.delay) * 1000;

      setTimeout(() => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            if (updatedCounts[index] < targetValue) {
              updatedCounts[index] += 1; // Increment count by 1
            } else {
              clearInterval(interval); // Stop the interval
            }
            return updatedCounts;
          });
        }, 50); // Adjust the speed of the count (50ms per increment)

        intervals.push(interval); // Store the interval for cleanup
      }, delay);
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [stats]);

  return (
    <div className="bg-green-400 py-5 px-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center animate-fadeIn"
              style={{ animationDelay: stat.delay }}
            >
              <h1 className="text-blue-900 text-4xl font-bold mr-3">
                {counts[index]}
              </h1>
              <h5 className="text-white mt-1 text-lg">{stat.description}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
