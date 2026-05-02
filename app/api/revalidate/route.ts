import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const token = request.nextUrl.searchParams.get("token");

  // Validate token
  const secret = process.env.REVALIDATION_TOKEN;
  if (token !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag parameter" }, { status: 400 });
  }

  try {
    revalidateTag(tag, "max");
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
