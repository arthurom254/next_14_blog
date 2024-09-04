import React from 'react'
const shields = [
    {
      name: "Python",
      url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
    },
    {
      name: "C++",
      url: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cpp&logoColor=white"
    },
    {
      name: "Java",
      url: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
    },
    {
      name: "Web",
      url: "https://img.shields.io/badge/Web-4285F4?style=for-the-badge&logo=html5&logoColor=white"
    },
    {
      name: "Git",
      url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
    },
    {
      name: "Next.js",
      url: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
    },
    {
      name: "JavaScript",
      url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
    },
    {
        name: "Tailwind CSS",
        url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
      },
      {
        name: "Node.js",
        url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
      },
      {
        name: "React",
        url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
      },
      {
        name: "Django",
        url: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
      },
      {
        name: "Flask",
        url: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
      },
      {
        name: "Linux",
        url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
      },
      {
        name: "Termux",
        url: "https://img.shields.io/badge/Termux-000000?style=for-the-badge&logo=termux&logoColor=white"
      },
      {
        name: "Cpanel",
        url: "https://img.shields.io/badge/cpanel-F05032?style=for-the-badge&logo=cpanel&logoColor=white"
      }
  ];
  
export default function Categories() {
  return (
    <div className='md:mx-10 mx-2'>
        <h2 className='text-center '>What are you interested in?</h2>
            <div className="relative">
                <div className="absolute inset-1 bg-red-400/20 -z-10 blur-3xl filter  "></div>
            <div className="grid gap-3 grid-cols-3 md:grid-cols-5">
                {shields.map((shield, index)=>(
                    <div key={shield.name} className="bg-[#151b23] border border-gray-200/20 rounded flex justify-center items-center text-center md:text-2xl   ">
                        <a href={"/"} className='no-underline w-full py-5 px-2 flex flex-col justify-center items-center gap-3 '>
                        <img src={shield.url} className='m-0 rounded animate-pulse' alt="" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
