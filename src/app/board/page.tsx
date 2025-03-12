import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import ClientImage from "@/components/ClientImage";

export default function BoardPage() {
  const president = {
    name: "Forrest Wartig",
    position: "President",
    bio: "Leading the Investment Banking Club with dedication and expertise.",
    image: "/img/team/forrest_wartig.JPG"
  };

  const vicePresidents = [
    {
      name: "Nick Lloyd",
      position: "Vice President",
      bio: "Committed to helping students succeed in investment banking.",
      image: "/img/team/Lloyd - Logo Shot.JPG"
    },
    {
      name: "Angel Dang",
      position: "Vice President",
      bio: "Passionate about finance and mentoring fellow students.",
      image: "/img/team/Dang - Logo Shot.JPG"
    },
    {
      name: "Chloe Miller",
      position: "Vice President",
      bio: "Dedicated to creating opportunities for students in finance.",
      image: "/img/team/Miller - Logo Shot.JPG"
    },
    {
      name: "Mustafa Hakeem",
      position: "Vice President",
      bio: "Bringing industry insights to help students prepare for careers in banking.",
      image: "/img/team/Hakeem - Logo Shot.JPG"
    },
    {
      name: "Jilary Rodriguez",
      position: "Vice President",
      bio: "Focused on developing educational resources for club members.",
      image: "/img/team/rodriguez.JPG"
    },
    {
      name: "Cole Nielson",
      position: "Vice President",
      bio: "Working to build connections between students and industry professionals.",
      image: "/img/team/Cole - Logo Shot.JPG"
    },
    {
      name: "Michael Routt",
      position: "Vice President",
      bio: "Committed to enhancing the club's training programs.",
      image: "/img/team/michael_routt.JPG"
    },
    {
      name: "Ryan Mendiola",
      position: "Vice President",
      bio: "Dedicated to organizing valuable events for club members.",
      image: "/img/team/mendiola.JPG"
    }
  ];

  return (
    <Container>
      {/* Header Image */}
      <div className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden">
        <ClientImage
          src="/img/team/DSC02609.JPG"
          alt="Investment Banking Club Team"
          fill
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Executive Board</h1>
            <p className="text-xl">Meet our talented team of investment banking enthusiasts</p>
          </div>
        </div>
      </div>

      <SectionTitle
        preTitle="Our Team"
        title="Executive Board"
      >
        Meet our talented team of nine and explore their professional involvements below. We are thrilled to engage with the Bronco community!
      </SectionTitle>

      {/* President Section */}
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">President</h2>
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-80 w-full bg-gray-200 dark:bg-gray-700">
              <ClientImage
                src={president.image}
                alt={president.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{president.name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{president.position}</p>
              <p className="text-gray-600 dark:text-gray-300">{president.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vice Presidents Grid */}
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">Vice Presidents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vicePresidents.map((vp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-80 w-full bg-gray-200 dark:bg-gray-700">
                <ClientImage
                  src={vp.image}
                  alt={vp.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit={vp.name === "Jilary Rodriguez" ? "contain" : "cover"}
                  objectPosition={vp.name === "Jilary Rodriguez" ? "center center" : undefined}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{vp.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{vp.position}</p>
                <p className="text-gray-600 dark:text-gray-300">{vp.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8 my-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Join Our Executive Board</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Interested in becoming a board member? Elections are held at the end of each academic year. Board members gain valuable leadership experience and have the opportunity to shape the future of the club.
        </p>
        <div className="text-center">
          <a
            href="/contact"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </Container>
  );
} 