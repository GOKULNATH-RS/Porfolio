import { Hero, Aboutme, Projects, Connect } from "./sections/index.js";

export default function App() {
  return (
    <section className="flex flex-col gap-10 dark:bg-[#100e1c] dark:z-[2] overflow-hidden">
      <div className="relative">
        <Hero />
        <div className="blur-[125px] gradient-2 h-[60vh] w-[40vw] top-1/3 right-0 absolute -z-[1] dark:z-0" />
        <Aboutme />
        <div className="blur-[125px] gradient-2 h-[60vh] w-[40vw] bottom-0 left-0 absolute -z-[1]" />
      </div>
      <div className="relative">
        <div className="blur-[125px] gradient-2 h-[70vh] w-[35vw] absolute -z-[1] dark:z-1 " />
        <Projects />
        <div className="blur-[125px] gradient-1 h-[30vh] w-[35vw] absolute left-0 bottom-0 -z-[1] dark:z-0" />
        <div className="blur-[125px] gradient-2 h-[70vh] w-[35vw] absolute right-0 top-1/3 -z-[1] " />
        <Connect />
      </div>
    </section>
  );
}

/*
//todo: Change Github icons , Twitter icon , Live Icon
//todo: Change Theme icon toggling
//todo: Dark Theme / Light Theme
//todo: KnowMynation Project
todo: Add Tech stack in project Card
//todo: Smooth animations
todo: Menu in small devices
todo: responsive

*/
