import { useState } from 'react';

function Age() {
  const [dob, setDob] = useState('');
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateRemainingTime = (currentDate, dobDate) => {
    const years = currentDate.getFullYear() - dobDate.getFullYear();
    const months = currentDate.getMonth() - dobDate.getMonth();
    const days = currentDate.getDate() - dobDate.getDate();

    let remainingMonths = months;
    let remainingDays = days;

    if (remainingDays < 0) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      remainingDays = prevMonthDate - dobDate.getDate() + currentDate.getDate();
      remainingMonths--;
    }

    if (remainingMonths < 0) {
      remainingMonths += 12;
    }

    return {
      years:years-(1),
      months: remainingMonths,
      days: remainingDays,
    };
  };

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    const age = calculateRemainingTime(currentDate, dobDate);
    setAgeDetails(age);
  };

  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center bg-gray-200">
      <div className="bg-red-100 p-8 rounded shadow-md w-[90%] max-w-[900px]">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-center">Age Calculator</h1>
        <label htmlFor="dob" className="block text-lg md:text-3xl ml-[0px] mb-2">
          Enter your date of Birth:
        </label>
        <div className="flex justify-center">
          <input
            type="date"
            id="dob"
            className="border border-gray-700 p-2 w-full md:w-[840px] mb-4"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 w-full md:w-[840px] h-[55px] text-white p-2 text-lg md:text-2xl rounded hover:bg-blue-600 focus:outline-none"
            onClick={calculateAge}
          >
            Calculate Age
          </button>
        </div>
        {ageDetails !== null && (
          <p className="text-lg md:text-2xl mt-4 text-center">
            Your age is: {ageDetails.years} Years, {ageDetails.months} Months, and {ageDetails.days} Days.
          </p>
        )}
      </div>
    </div>
  );
}

export default Age;