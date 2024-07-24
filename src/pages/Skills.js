import React from "react";

const SkillTag = ({ skill, icon }) => (
  <li className="bg-secondary text-text-secondary px-3 py-1 rounded-full flex items-center space-x-2 text-sm">
    <img src={icon} alt={skill} className="w-4 h-4" />
    <span>{skill}</span>
  </li>
);

const Skills = () => {
  const skills = [
    {
      skill: "Swift",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    },
    {
      skill: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      skill: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg ",
    },
    {
      skill: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      skill: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      skill: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      skill: "Kibana",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original-wordmark.svg",
    },
    {
      skill: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      skill: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  return (
    <div className="container">
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <SkillTag key={index} {...skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;