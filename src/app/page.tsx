import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
