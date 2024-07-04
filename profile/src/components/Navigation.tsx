//라이브러리
import React from "react";

//css 파일

//file

const Navigation: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[8vh] bg-slate-300">
        <div className="ml-4">
          <p className="font-bold text-2xl">KDY's Portfolio</p>
        </div>
        <div className="flex min-w-[30%] justify-around items-center font-extrabold mr-4">
          <p>About me</p>
          <p>Skills</p>
          <p>Project</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
