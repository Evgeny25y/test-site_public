import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const ogSize = { width: 1200, height: 630 };

const fontFile = (name: string) =>
  readFile(path.join(process.cwd(), "node_modules", "@fontsource", "literata", "files", name));

export async function renderOgImage() {
  const [cyrillic, latin] = await Promise.all([
    fontFile("literata-cyrillic-600-normal.woff"),
    fontFile("literata-latin-600-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F3EF",
          color: "#24364B",
          padding: 72,
          fontFamily: "Literata",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, letterSpacing: 18 }}>{profile.brand}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, lineHeight: 1.05 }}>Евгений Ротов</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 20, color: "#5B5E64" }}>
            Юрист по гражданскому праву
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            borderTop: "2px solid #24364B",
            paddingTop: 28,
          }}
        >
          {profile.experienceYears} лет практики
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Literata", data: cyrillic, weight: 600, style: "normal" },
        { name: "Literata", data: latin, weight: 600, style: "normal" },
      ],
    },
  );
}
