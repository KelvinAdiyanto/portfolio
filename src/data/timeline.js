const calculateYear = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export default [
  {
    year: "Today",
    title: "Computer Science Student",
    duration: calculateYear(2022) + " years",
    details:
      "I'm currently a Computer Science student. Learning about programming, algorithms, data structures, and software development.",
  },
  {
    year: "2021",
    title: "Intro to Programming",
    duration: calculateYear(2021) + " years",
    details:
      "Learned my first programming language through online courses, and self-study.",
  },
];
