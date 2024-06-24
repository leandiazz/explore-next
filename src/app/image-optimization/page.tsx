import Image from "next/image";

const imageURL = "https://images.unsplash.com/photo-1718787505043-670b9b691d05";

export default async function ImagesPage() {
  const imageBlur = await fetch(imageURL).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString("base64");
  });

  // <Image alt="Some Placeholder" height={100} src="your image url" width={100} />;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h1 className="text-center text-5xl font-bold">Image Optimization With Blur Placeholder</h1>
      <picture className="relative h-[500px] w-[300px]">
        <Image
          fill
          alt="parked blue car"
          blurDataURL={`data:image/png;base64,${imageBlur}`}
          className="object-cover"
          placeholder="blur"
          src={imageURL}
        />
      </picture>
    </div>
  );
}