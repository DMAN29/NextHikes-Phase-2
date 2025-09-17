import DomeGallery from "../DomeGallery";

export default function Gallery() {
  return (
    <section className="w-full">
      <h3
        className="text-center capitalize font-semibold text-[#363636] 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
               mb-8 sm:mb-10"
      >
        nexthikes gallery
      </h3>

      <div className="relative w-full h-[100vh] bg-black">
        <DomeGallery
          grayscale={false}
          minRadius={600}
          fit={0.8}
          maxVerticalRotationDeg={10}
          dragDampening={2}
          segments={34}
        />
      </div>
    </section>
  );
}
