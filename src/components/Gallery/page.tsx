import DomeGallery from "../DomeGallery";

export default function Gallery() {
  return (
    <section className="w-full h-[100vh] bg-black">
      <DomeGallery
        grayscale={false}
        minRadius={600}
        fit={0.8}
        maxVerticalRotationDeg={10}
        dragDampening={2}
        segments={34}
      />
    </section>
  );
}
