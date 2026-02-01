import { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// List images in a guitar folder
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ folder: string }> }
) {
  const { folder } = await params;

  // Base path to guitars folder - in the site directory
  const guitarsFolder = "/Users/otis/Desktop/Clint Hasse - Site/Guitars";
  const fullPath = path.join(guitarsFolder, folder);

  if (!fullPath.startsWith(guitarsFolder)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!existsSync(fullPath)) {
    return NextResponse.json({ error: "Folder not found", path: fullPath }, { status: 404 });
  }

  try {
    const files = await readdir(fullPath);
    const images = files
      .filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return NextResponse.json({
      folder,
      images,
      urls: images.map((img) => `/api/guitars/images/${folder}/${img}`),
    });
  } catch (error) {
    return NextResponse.json({ error: "Error reading folder" }, { status: 500 });
  }
}
