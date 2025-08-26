const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-72 pb-[200px] flex items-center justify-center"
    >
      <div className="flex flex-col items-start justify-center text-left max-w-4xl px-4">
        <h1 className="text-6xl mb-5 leading-tight bg-gradient-to-r from-black to-pink-600 bg-clip-text text-transparent">
          Hi! I'm <span className="font-">Winnie </span> 
        </h1>
        <p className="text-3xl font-semibold mb-8">
          A 3rd year software engineering student @ UNSW who loves creating digital
          experiences and exploring the bridge between tech, business & design.
        </p>
        <div className="flex gap-[30px]">
            <button className="hero-button"><a href="https://drive.google.com/file/d/16BaFfj_bYgXWRyBZIP99-fYM3HHj1W5I/view?usp=drive_link" target="_blank" >resume</a></button>
            <button className="hero-button"><a href="#contact">let's chat!</a></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
