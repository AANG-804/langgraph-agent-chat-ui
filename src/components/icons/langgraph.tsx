import Image from "next/image";

export function LangGraphLogoSVG({
  className,
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  // [BRANDING] 서울대학교 로고로 교체됨 (Replaced with SNU logo)
  // public/logo.png 파일을 사용합니다.
  return (
    <div className={className} style={{ width: width || 32, height: height || 32, position: 'relative' }}>
      <Image
        src="/logo.png"
        alt="Seoul National University Logo"
        fill
        className="object-contain"
        sizes={`${width || 32}px`}
      />
    </div>
  );
}
