import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { refreshAccessToken } from './shared/apis/auth';

interface DecodedToken {
  exp: number; // 토큰 만료 시간
}
const PUBLIC_PATHS = ['/login', '/onboarding'];

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  if (!PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;

    const res = NextResponse.next();

    if (accessToken) {
      try {
        const decoded = jwtDecode<DecodedToken>(accessToken);
        const expirationTime = decoded.exp * 1000; // milliseconds로 변환
        const currentTime = Date.now();
        const fiveMinutes = 5 * 60 * 1000; // 5분을 milliseconds로 변환

        // 토큰이 5분 이내에 만료되는 경우 미리 갱신
        if (expirationTime - currentTime < fiveMinutes) {
          if (refreshToken) {
            try {
              const newAccessToken = await refreshAccessToken(refreshToken);

              res.cookies.set('accessToken', newAccessToken, {
                httpOnly: true,
                path: '/',
              });
              applySetCookie(request, res);
            } catch (error) {
              console.error('토큰 갱신 실패:', error);
              return NextResponse.redirect(new URL('/login', request.url));
            }
          }
        }
      } catch (error) {
        console.error('토큰 디코딩 실패:', error);
      }
    } else if (refreshToken) {
      // accessToken이 없고 refreshToken이 있는 경우 갱신 시도
      try {
        const newAccessToken = await refreshAccessToken(refreshToken);

        res.cookies.set('accessToken', newAccessToken, {
          httpOnly: true,
          path: '/',
          secure: process.env.NODE_ENV === 'production',
        });

        applySetCookie(request, res);
      } catch (error) {
        console.error('토큰 갱신 실패:', error);
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    return res;
  }

  return NextResponse.next();
}

function applySetCookie(req: NextRequest, res: NextResponse): void {
  const setCookies = res.headers.get('set-cookie');
  if (setCookies) {
    const newReqHeaders = new Headers(req.headers);
    newReqHeaders.set('cookie', setCookies);
    res.headers.set(
      'x-middleware-request-headers',
      newReqHeaders.get('cookie') || '',
    );
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
