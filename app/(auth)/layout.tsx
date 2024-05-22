// export default function AuthLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex flex-col relative items-center justify-between bg-[#080710]  h-screen ">
//       <div
//         className="w-[430px] h-[520px] absolute left-[50%] right-[50%]"
//         style={{
//           transform: "translate(-50%,-50%)",
//         }}
//       >
//         <div
//           className="h-[200px] w-[200px] rounded-full absolute bottom-[-80px] left-[-80px]"
//           style={{
//             background: "linear-gradient(#1845ad,#23a2f6)",
//           }}
//         ></div>
//         <div
//           className="h-[200px] w-[200px] rounded-full absolute"
//           style={{
//             background: "linear-gradient(to right,#ff512f,#f09819)",
//             right: "-30px",
//             bottom: "-545px",
//           }}
//         ></div>
//       </div>
//       <div
//       className="flex flex-col items-center"
//         style={{
//           // height: "520px",
//           width: "360px",
//           backgroundColor: "rgba(255,255,255,0.13)",
//           position: "absolute",
//           transform: "translate(-50%,-50%)",
//           top: "50%",
//           left: "50%",
//           borderRadius: "10px",
//           backdropFilter: "blur(10px)",
//           border: "2px solid rgba(255,255,255,0.1)",
//           boxShadow: "0 0 40px rgba(8,7,16,0.6)",
//           padding: "50px 35px",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-1/2 md:w-1/2 xl:w-2/3 h-screen relative">
        <Image
          src="/downloader.svg"
          alt=""
          className="h-full object-cover"
          layout='fill'
          objectFit="cover"
          
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">{children}</div>
      </div>
    </div>
  );
}
