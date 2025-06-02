'use client'

export default function About(){
    return (
        <section id="section" className="w-full py-16 md:py-24 bg-transparent text-current">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left">
          The Builder Behind the Code
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
          Hey! I'm Aryan, a Computer Science student who turns caffeine into
          code and ideas into reality. When I'm not busy building, you'll find
          me diving deep into the latest AI developments or creating content
          that bridges the gap between complex tech and everyday users. Or
          just gaming with the boys.
        </p>
        {/* You can add more paragraphs, images, or other content here */}
      </div>
        </section>
    );
}