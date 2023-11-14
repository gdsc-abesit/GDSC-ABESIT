import Image from "next/image";
import image1 from "../assets/image1.jpg";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="flex flex-col text-center">
        <div className="text-6xl font-semibold">
          Connect with us
        </div>
        <div className="text-gray-500">
          wanna Connect ??
        </div>
      </div>

      <div className="flex justify-between my-10 md:flex-row flex-col">
        <div className="bg-[#EA4335] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
          <Link href={'https://www.instagram.com/gdscabesit'} target="_blank"> Instagram </Link>
        </div>

        <div className="bg-[#4285F4] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'https://www.linkedin.com/company/dscabesit/mycompany/'} target="_blank"> Linkedin </Link>
        </div>

        <div className="bg-black text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'https://github.com/gdsc-abesit'} target="_blank"> Github </Link>
        </div>

        <div className="bg-[#FBBC04] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'https://discord.com/invite/jmN7J2eEna'} target="_blank"> Discord </Link>
        </div>

        <div className="bg-[#4285F4] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'https://twitter.com/gdscabesit'} target="_blank"> Twitter </Link>
        </div>

        <div className="bg-[#34A853] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'https://chat.whatsapp.com/JAvuGSteiGD0SotHdrZPTn'} target="_blank"> Whatsapp </Link>
        </div>

        <div className="bg-[#EA4335] text-white px-3 w-28 justify-center py-2 flex items-center rounded-full border-[1px] hover:border-gray-400 hover:cursor-pointer">
        <Link href={'mailto:dsc.abesit@gmail.com'} target="_blank"> Gmail </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;