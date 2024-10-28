import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/db/queries";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="h-64 w-64">
          <Image
            src={image.url}
            alt=""
            width={480}
            height={480}
            style={{ objectFit: "contain" }}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
