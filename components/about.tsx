'use client'

export default function About(){
    return (
        <section id="about" className="w-full h-screen snap-start flex flex-col justify-center items-center text-center p-6 md:p-12 lg:p-16 xl:p-24">
            <div className="max-w-3xl">
        {" "}
        {/* Constrain width of content */}
        <h2 className="text-3xl font-extrabold mb-8">
          The Builder Behind the Code
        </h2>
        <p className="text-lg md:text-xl">
          Hey! I'm Aryan, a Computer Science student who turns caffeine into
          code and ideas into reality. When I'm not busy building, you'll find
          me diving deep into the latest AI developments or creating content
          that bridges the gap between complex tech and everyday users. Or
          just gaming with the boys.
        </p>
      </div>
        </section>
    );
}