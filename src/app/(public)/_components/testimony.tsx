import Image from "next/image";
import { StarIcon } from "./star-Icon";

interface TestimonyProps {
  srcImg: string;
  name: string;
  location: string;
  description: string;
  alt: string;
}

export function Testimony({ srcImg, description, location, name, alt }: TestimonyProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md testimonial-card">
      <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={srcImg}
              alt={alt}
              quality={100}
              priority
              className="w-full h-full object-cover"
              width={65}
              height={64}
            />
          </div>
          <div className="ml-4">
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-teal-500">{location}</p>
          </div>
      </div>
      <p className="text-gray-600 italic">{description}</p>
      <div className="flex mt-4 text-yellow-400">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
  </div>
  )
}