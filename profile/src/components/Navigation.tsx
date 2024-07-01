//라이브러리
import React from "react";

//css 파일

//file

const Navigation: React.FC = () => {
  return (
    <>
      <div className="flex justify-between py-[1vh] px-[2vh] bg-slate-200">
        <div>
          <p className="font-bold text-2xl">KDY's Portfolio</p>
        </div>
        <div className="flex min-w-[30%] justify-around items-center">
          <p>About me</p>
          <p>Skills</p>
          <p>Project</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
