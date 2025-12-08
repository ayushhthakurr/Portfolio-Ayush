"use client";

export default function TechMarquee() {
  const tech = [
    { name: "React", img: "/logos/react.svg" },
    { name: "TypeScript", img: "/logos/typescript.svg" },
    { name: "Node.js", img: "/logos/node.svg" },
    { name: "Python", img: "/logos/python.svg" },
    { name: "C++", img: "/logos/c++.svg" },
    { name: "MySQL", img: "/logos/mysql.svg" },
    { name: "Firebase", img: "/logos/firebase.svg" },
    { name: "AWS", img: "/logos/aws.svg" },
    { name: "Flutter", img: "/logos/flutter.svg" },
    { name: "Salesforce", img: "/logos/salesforce.svg" },
  ];

  const items = [...tech, ...tech, ...tech, ...tech];

  return (
    <div className="py-8 overflow-hidden bg-[#0d1117]/50 border-y border-[#30363d]">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-4 flex-none group">
            <img
              src={t.img}
              alt={t.name}
              className="w-10 h-10 object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <span className="text-gray-500 font-mono text-sm whitespace-nowrap transition-all duration-300 group-hover:text-[#58a6ff]">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
