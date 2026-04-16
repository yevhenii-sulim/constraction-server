import {db} from '@/lib/db';
import {products} from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(products);
  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const result = await db.insert(products).values({
    slug: body.slug,
    title: body.title,
    description: body.description,
    imageUrl: body.imageUrl,
  });

  return Response.json(result);
}
