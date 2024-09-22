interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: "Software engineer",
    company: "Delivery Hero",
    date: "September 2023- Present",
    description: [
      "Engineered scalable software solutions for a high-traffic customer care platform, using primarily TypeScript and React.js.",
      "Led end-to-end management of epics, refining requirements, planning with Jira, and driving timely delivery.",
      "Proposed and implemented optimizations that improved application performance and user experience.",
      "Collaborated closely with designers and developers to deliver seamless, consistent user experiences.",
      "Developed and maintained comprehensive test suites (Cypress, Jest, React Testing Library) to ensure software reliability and maintainability.",
    ],
  },
];
