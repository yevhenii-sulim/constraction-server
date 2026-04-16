import {uploadImage} from '@/lib/storage/blob';
import {put} from '@vercel/blob';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  const url = await uploadImage(file);

  return Response.json({url});
}
