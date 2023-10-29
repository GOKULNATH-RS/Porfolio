const ProjectCard = ({
  imgUrl,
  title,
  desription,
  icon1,
  icon2,
  href1,
  href2,
  tagText,
}) => {
  return (
    <div className="flex flex-col justify-between p-1 h-[350px] w-[300px] rounded-3xl shadow-primary dark:shadow-[2px_2px_50px_0_rgba(255,255,255,0.05)]">
      <div className="flex-1">
        <img src={imgUrl} className="rounded-[20px] h-full w-full " />
      </div>



      <div className="flex flex-col gap-1 flex-2 p-2 ">
        <h2 className="text-md font-bold font-geologica dark:text-white">
          {title}
        </h2>
        <h4 className="text-sm font-geologica dark:text-white">
          {desription}
          </h4>
        
      </div>


      <div className="flex justify-between items-center flex-2 p-2">
        <div className="flex gap-2">
          <a
            href={href1}
            className="rounded-full shadow-primary p-1 dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]"
            target="blank"
          >
            <img src={icon1} className="h-6 w-6" />
          </a>
          <a
            href={href2}
            className="bg-white rounded-full shadow-primary p-1 dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]"
            target="blank"
          >
            <img src={icon2} className="h-6 w-6 " />
          </a>
        </div>
        <div className="h-5 w-max px-1 rounded-full gradient-3 flex justify-center items-center text-[12px] font-gruppo font-bold shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
          {tagText}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
