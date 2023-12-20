import {NextResponse, NextRequest} from "next/server";

export function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get('token');

    if (!token) {
        return NextResponse.json({ error: "Token is required" });
    }
    return NextResponse.redirect(`holiyou://auth?token=${encodeURIComponent(token)}`);
}