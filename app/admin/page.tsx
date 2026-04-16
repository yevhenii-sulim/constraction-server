'use client';

import {uploadImage} from '@/lib/storage/blob';

export default function Page() {
  const onSubmit = () => {};

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    console.log(data.url);
  };
  return (
    <form>
      <input type='file' onChange={handleChange} />
      <button
        type='submit'
        onClick={onSubmit}
        className='border px-2 py-1 bg-amber-400'
      >
        save
      </button>
    </form>
  );
}
