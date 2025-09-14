"use client";

import Horizontal from "../ProfileCard/ProfileCard";

interface SocialLink {
  url: string;
  platform: "linkedin" | "twitter" | "facebook" | "github" | "instagram";
}

export interface Member {
  name: string;
  designation: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}


const teamMembers: Member[] = [
  {
    name: "Javi A. Torres",
    designation: "Software Engineer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/javicodes" },
      { platform: "github", url: "https://github.com/javicodes" },
      { platform: "twitter", url: "https://twitter.com/javicodes" },
    ],
  },
  {
    name: "Aisha R. Khan",
    designation: "Product Designer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/aishadesigns" },
      { platform: "instagram", url: "https://instagram.com/aishadesigns" },
    ],
  },
  {
    name: "Leo Chen",
    designation: "Data Scientist",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/leodatasci" },
      { platform: "twitter", url: "https://twitter.com/leodatasci" },
    ],
  },
  {
    name: "Maria B. Lopez",
    designation: "UI/UX Designer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/marialopez" },
      { platform: "facebook", url: "https://facebook.com/marialopez" },
      { platform: "instagram", url: "https://instagram.com/marialopez" },
    ],
  },
];


export default function Team() {
  return (
    <section className="custom-container min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center max-w-2xl text-center">
        <h3 className="uppercase text-4xl font-semibold mb-3">
          meet our best team
        </h3>
        <p>
          Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
          arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
          turpis malesuada, eu luctus elit dignissim.
        </p>
        <div className="border border-black max-w-[150px] w-full my-5" />
      </div>

      {/* <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        {teamMembers.map((member) => (
          <ProfileCard
            key={member.handle}
            name={member.name}
            title={member.title}
            handle={member.handle}
            status={member.status}
            contactText={member.contactText}
            avatarUrl={member.avatarUrl}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log(`Contact ${member.name} clicked`)}
            showBehindGradient={false}
            iconUrl="/icons/triangle-pattern.svg"
          />
        ))}
      </div> */}
        <Horizontal data={teamMembers} />
    </section>
  );
}
