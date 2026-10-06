import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "ROTOV: Евгений Ротов, юрист по гражданскому праву";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage();
}
