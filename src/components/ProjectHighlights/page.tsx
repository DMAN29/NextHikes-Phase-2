import MagicBento from "./MagicBento";
import { FaArrowRight } from "react-icons/fa6";
export default function ProjectHighlights() {
  return (
    <section className="md:flex my-10">
      <div className="w-full md:w-1/3 text-center md:text-left md:ml-5 lg:ml-15  flex flex-col  gap-5 justify-center mb-5 md:mb-0  ">
        <h1 className="text-2xl md:text-5xl xl:text-7xl  font-semibold leading-relaxed">
          Our Latest Work
        </h1>
        <p className="font-semibold flex gap-5 items-center mx-auto md:mx-0  text-gray-700 lg:text-lg">
          <span>OUR CASE STUDIES</span>
          <FaArrowRight />
        </p>
      </div>
      <div className="w-full md:w-2/3 my-auto">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          projects={[
            {
              title: "project1",
              description: "desc1",
              imgUrl:
                "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              title: "project2",
              description: "desc2",
              imgUrl:
                "https://img.freepik.com/free-photo/man-seashore_1098-13197.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              title: "project3",
              description: "desc1",
              imgUrl:
                "https://img.freepik.com/free-photo/full-shot-man-standing-rocks_23-2148918941.jpg",
            },
            {
              title: "project4",
              description: "desc2",
              imgUrl:
                "https://thumbs.dreamstime.com/b/best-friends-2749620.jpg",
            },
            {
              title: "project5",
              description: "desc1",
              imgUrl:
                "https://thumbs.dreamstime.com/b/night-landscape-colorful-milky-way-yellow-light-mountains-starry-sky-hills-summer-beautiful-universe-space-72956059.jpg",
            },
            {
              title: "project6",
              description: "desc2",
              imgUrl:
                "https://thumbs.dreamstime.com/b/milky-way-night-sky-silhouette-standing-man-landscape-stars-happy-mountain-67064886.jpg",
            },
            // and so on for other projects
          ]}
        />
      </div>
    </section>
  );
}
