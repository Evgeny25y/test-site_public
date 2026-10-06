import Image from "next/image";
import { profile } from "@/content/profile";

interface HeroPortraitProps {
  /** Путь к фотографии (например, /images/portrait.jpg). Без него показывается типографическая композиция. */
  imageSrc?: string;
  alt?: string;
  objectPosition?: string;
}

const frame = "relative w-full overflow-hidden rounded-md border border-line bg-wash";

export function HeroPortrait({ imageSrc, alt = "", objectPosition = "center" }: HeroPortraitProps) {
  if (imageSrc) {
    return (
      <div className={`${frame} aspect-square lg:aspect-[4/5]`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>
    );
  }

  const [lastName, firstName, patronymic] = profile.fullName.toUpperCase().split(" ");

  return (
    <div aria-hidden="true" className={`${frame} aspect-square [container-type:inline-size] lg:aspect-[4/5]`}>
      <div className="absolute inset-0 flex flex-col justify-between p-[7cqw]">
        <div className="flex items-start justify-between font-serif text-primary">
          <span className="text-[4.4cqw] font-semibold tracking-[0.5em]">{profile.brand}</span>
          <span className="h-px w-[18cqw] translate-y-[2.4cqw] bg-primary/50" />
        </div>

        <p className="-ml-[2cqw] font-serif text-[52cqw] font-medium leading-[0.8] tracking-[-0.04em] text-primary lg:text-[56cqw]">
          РЕ
        </p>

        <div className="border-t border-primary/40 pt-[3.2cqw] font-serif text-[4.2cqw] leading-[1.5] tracking-[0.22em] text-primary">
          <p>{lastName}</p>
          <p>{firstName}</p>
          <p>{patronymic}</p>
        </div>
      </div>
    </div>
  );
}
