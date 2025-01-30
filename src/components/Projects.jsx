import React from 'react';
import { motion } from 'framer-motion';

export const projectsData = [
  {
    title: "LeetCode Visualizer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhfxdFGbX8NLuKVppSIIHzeqGcLXv1ocXkQ&s",  // Link to the LeetCode Visualizer image
    link: "https://leet-code-comparator-by-gaganreddy.vercel.app/"  // LeetCode Visualizer link
  },
  {
    title: "Github Visualizer",
    image: "https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg",  // Link to the Github Visualizer image
    link: "https://profile-visualizer.vercel.app"  // Github Visualizer link
  },
  {
    title: "Codeforces Visualizer",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*iPZ00kImJY8oVioV5Dy75A.jpeg",  // Link to the Codeforces Visualizer image
    link: "https://visual-force.vercel.app/"  // Codeforces Visualizer link
  },
  {
    title: "Time Complexity Calculator",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*Trt6KvNri60MWr7g.png",  // Link to the Time Complexity Calculator image
    link: "https://complexify.vercel.app/"  // Time Complexity Calculator link
  },
  {
    title: "AI Based DSA Problem Generator",
    image: "https://www.oxfordinstitute.in/img/dsa-course.jpg",  // Link to the AI DSA Problem Generator image
    link: "#"  // Placeholder link for AI Based DSA Problem Generator (update with actual link if available)
  },
  {
    title: "AI Based Mock Interview",
    image: "https://i.geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/08/ai-interview-preparation-tools.png",  // Link to the AI Based Mock Interview image
    link: "https://hyreai.vercel.app/"  // AI Based Mock Interview link
  },
  {
    title: "Coding Heatmap Visualizer",
    image: "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",  // Link to the Coding Heatmap Visualizer image
    link: "https://tle-profiles.com"  // All-in-One Coding Heatmap Visualizer link
  }
];

const Projects = () => {
  const handleButtonClick = (project) => {
    // Add your button click handling logic here
    console.log('Button clicked for project:', project);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        DSA<span className="underline underline-offset-4 decoration-1 font-light">Tools</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Best Resources for your Practice
      </p>

      {/* Project cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                {/* Image with fixed height and object-fit */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {/* Text box */}
                <div className="flex flex-col justify-center items-center p-4 h-40">
                  <h2 className="text-lg font-semibold text-gray-800 text-center">{project.title}</h2>
                  {/* Button container centered */}
                  <div className="flex justify-center mt-auto">
                    <button 
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      onClick={() => handleButtonClick(project)}
                    >
                      Visit Project
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
