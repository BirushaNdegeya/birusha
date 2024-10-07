import Markdown from "react-markdown";


export default function About(): JSX.Element {
   return (
      <section
         id="about-me"
         className="w-full my-6 flex items-center flex-col gap-10"
      >
         <h2 className="text-bold text-3xl text-center my-4 text-primary">ABOUT ME</h2>
         <div className=" font-light flex flex-col gap-4 items-center justify-center text-center">
            <p className="w-[30rem] max-[550px]:w-[22rem] ">
               Hello, I'm Birusha, a front-end web developer and UI designer based in Goma, Nord-Kivu, DR Congo. Passionate about new technologies, I specialize in creating visually appealing and user-friendly web experiences by merging front-end development and UI design. Inspired by Goma's vibrant culture, I infuse local elements into my work while exploring innovative techniques to stay ahead of trends. Collaboration is key to my approach, aiming to build impactful products that resonate with our audience. Excited about future opportunities, I look forward to connecting with fellow professionals in the industry. Thank you for reading!
            </p>
         </div>
         <h2 className="text-bold text-3xl text-center my-4 text-[#61DAFB]">SKILLS</h2>
         <div className="max-[640px]:flex-col flex  max-[640px]:items-center items-start  justify-center gap-8">
            <Markdown>
               ![](https://github-readme-stats.vercel.app/api/top-langs/?username=BirushaNdegeya&theme=prussian&hide_border=false&include_all_commits=false&count_private=false&layout=compact)
            </Markdown>
         </div>
      </section>
   );
}
