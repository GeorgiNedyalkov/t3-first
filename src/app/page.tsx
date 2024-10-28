import { db } from "~/server/db";

const mockData = [
  "https://utfs.io/f/AZ4TpV2wRXr39vW2ItrCSn6xNMjXbH5r3lFuyJQvZDqR12hL",
  "https://utfs.io/f/AZ4TpV2wRXr3sbFkQH4dUM8CYH5vt9EfyDSob1TrAOpm2zig",
  "https://utfs.io/f/AZ4TpV2wRXr3ZSKiItc730B2KVGIj5RnWma6vhzyeSFAJHtg",
  "https://utfs.io/f/AZ4TpV2wRXr3W0Vg13DH4EBuD2JZjX85vHMT1kiozAYghsUt",
  "https://utfs.io/f/AZ4TpV2wRXr3RZnb4bVahBOP1UH4Lz92A7jwDxoNrXm0VQkE",
];

const mockImages = mockData.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
