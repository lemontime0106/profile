//라이브러리
import React, { useEffect, useState } from "react";

//css 파일

//file

const Navigation: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleTop = () => {
      const vh = window.innerHeight / 100;
      const threshold = 8 * vh; // 8vh를 픽셀 값으로 변환
      if (window.scrollY > threshold) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleTop);
    return () => {
      window.removeEventListener("scroll", handleTop);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-between items-center h-[8vh] ${
          isTop ? "bg-slate-300" : "bg-opacity-50"
        } transition-all duration-300`}
      >
        <div className="ml-4">
          <p className="font-bold text-2xl">KDY's Portfolio</p>
        </div>
        <div className="flex min-w-[30%] justify-around items-center font-extrabold mr-4">
          <p className=" hover:cursor-pointer">About me</p>
          <p className=" hover:cursor-pointer">Skills</p>
          <p className=" hover:cursor-pointer">Project</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
