import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// Serve guitar images from the Guitars folder
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const imagePath = pathSegments.join("/");

  // Base path to guitars folder - in the site directory
  const guitarsFolder = "/Users/otis/Desktop/Clint Hasse - Site/Guitars";
  const fullPath = path.join(guitarsFolder, imagePath);

  // Security: ensure path doesn't escape the guitars folder
  if (!fullPath.startsWith(guitarsFolder)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (!existsSync(fullPath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();

    const mimeTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".webp": "image/webp",
    };

    const contentType = mimeTypes[ext] || "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return new NextResponse("Error reading file", { status: 500 });
  }
}
