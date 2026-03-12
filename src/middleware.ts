import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/proxy';

export async function middleware(request: NextRequest) {
  // next intercepta la petición antes de que llegue a /admin y llama a updateSession
  return await updateSession(request);
}

export const config = {
  matcher: ['/admin/:path*'],
};
