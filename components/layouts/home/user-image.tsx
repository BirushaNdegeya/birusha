import Image from "next/image";
import birusha from "@/public/birusha.jpg";

const UserImage = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="w-full h-full flex flex-wrap">
        <Image
          className="w-[250px] h-[250px] object-cover rounded-full shadow-lg"
          alt="birusha's photo"
          src={birusha}
        />
      </div>
    </div>
  );
};

export default UserImage;
