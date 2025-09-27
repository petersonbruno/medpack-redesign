import Image from "next/image";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      {/* Spinner */}
      {/* <div className="w-16 h-16 border-4 border-[#0B7CD0] border-t-transparent rounded-full animate-spin"></div> */}
      <Image
        src="/logo.png"
        alt="MedPack Logo"
        width={80}
        height={80}
        className="animate-pulse"
      />
    </div>
  );
}
