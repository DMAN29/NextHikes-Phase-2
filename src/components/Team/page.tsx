import ProfileCard from "../ProfileCard/ProfileCard";

const teamMembers = [
  {
    name: "Javi A. Torres",
    title: "Software Engineer",
    handle: "javicodes",
    status: "Online",
    contactText: "Contact Me",
    avatarUrl: "/path/to/avatar1.jpg",
  },
  {
    name: "Aisha R. Khan",
    title: "Product Designer",
    handle: "aishadesigns",
    status: "Offline",
    contactText: "Contact Me",
    avatarUrl: "/path/to/avatar2.jpg",
  },
  {
    name: "Leo Chen",
    title: "Data Scientist",
    handle: "leodatasci",
    status: "Online",
    contactText: "Contact Me",
    avatarUrl: "/path/to/avatar3.jpg",
  },
  {
    name: "Maria B. Lopez",
    title: "UI/UX Designer",
    handle: "marialopez",
    status: "Online",
    contactText: "Contact Me",
    avatarUrl: "/path/to/avatar4.jpg",
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

      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
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
      </div>
    </section>
  );
}