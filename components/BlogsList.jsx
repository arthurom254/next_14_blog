import BlogCard from "./BlogCard";

export default function BlogsList() {
  const articles = [
    {
      content: "Mastering Tailwind CSS for Responsive Web Design",
      blogger: "Jane Doe",
      bio: "Front-end Developer and UI/UX Enthusiast",
      url: "/blogs/reader/mastering-tailwind-css-for-responsive-web-design-jane-doe",
      preview: "Discover how to use Tailwind CSS to create beautiful and responsive web designs effortlessly. Learn about utility-first principles, customization, and best practices to elevate your frontend development."
    },
    {
      content: "Building Scalable Applications with Node.js",
      blogger: "John Smith",
      bio: "Backend Developer and Node.js Expert",
      url: "/blogs/reader/building-scalable-applications-with-node-js-john-smith",
      preview: "Explore the power of Node.js in building scalable and efficient applications. From asynchronous programming to real-time data handling, understand how Node.js can be a game-changer for your backend development."
    },
    {
      content: "Getting Started with React: A Beginner's Guide",
      blogger: "Emily Davis",
      bio: "JavaScript Developer and React Instructor",
      url: "/blogs/reader/getting-started-with-react-a-beginners-guide-emily-davis",
      preview: "Kickstart your journey into React with this beginner-friendly guide. Learn the fundamentals of components, state, and props, and start building interactive user interfaces with ease."
    },
    {
      content: "Django: The Web Framework for Perfectionists with Deadlines",
      blogger: "Michael Brown",
      bio: "Full-Stack Developer and Python Enthusiast",
      url: "/blogs/reader/django-the-web-framework-for-perfectionists-michael-brown",
      preview: "Dive into Django, the web framework designed to help developers build robust and scalable applications quickly. This article covers Django’s key features, from ORM to its powerful admin interface."
    },
    {
      content: "Flask: The Lightweight Framework for Quick Prototyping",
      blogger: "Sara Lee",
      bio: "Python Developer and Flask Advocate",
      url: "/blogs/reader/flask-the-lightweight-framework-for-quick-prototyping-sara-lee",
      preview: "Learn why Flask is the go-to framework for developers who need a simple yet flexible tool for quick prototyping. This article covers Flask’s minimalist approach, making it ideal for small projects and APIs."
    },
    {
      content: "Linux: The Ultimate Guide for Beginners",
      blogger: "Alex Johnson",
      bio: "System Administrator and Linux Guru",
      url: "/blogs/reader/linux-the-ultimate-guide-for-beginners-alex-johnson",
      preview: "Start your Linux journey with this comprehensive guide for beginners. Understand the basics of Linux, from installation to navigating the command line, and discover why it’s the preferred OS for developers and sysadmins."
    },
    {
      content: "Termux: Bringing Linux to Android Devices",
      blogger: "Chris Evans",
      bio: "Mobile Developer and Open-Source Contributor",
      url: "/blogs/reader/termux-bringing-linux-to-android-devices-chris-evans",
      preview: "Unlock the power of Linux on your Android device with Termux. This guide explains how to set up and use Termux, turning your smartphone into a portable development environment."
    }
  ];
  
  const midpoint = Math.ceil(articles.length / 2);
  const leftData = articles.slice(0, midpoint);
  const rightData = articles.slice(midpoint);

  return (
    <div className="mx-2 md:mx-10 my-3 ">
        <div className="grid grid-cols-2 gap-6 ">
            <div className="col-span-full  md:col-span-1 gap-6 grid grid-cols-1">
              {leftData.length > 0 && leftData.map((blog, key)=>(
                  <BlogCard key={key} blog={blog}/>
                ))}
            </div>
            <div className="col-span-full md:col-span-1 gap-6 grid grid-cols-1 ">
                {rightData.length > 0 && rightData.map((blog, key)=>(
                  <BlogCard key={key} blog={blog}/>
                ))}
            </div>
        </div>
    </div>
  )
}
