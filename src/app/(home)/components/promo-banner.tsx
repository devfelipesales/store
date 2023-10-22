import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt, ...props }: ImageProps) => {
  return (
    <div className="container flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className="h-auto w-full max-w-full"
        sizes="100vw"
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
