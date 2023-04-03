import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }) => {
  const { title, image, ytlink, spotifylink, tags } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white !bg-opacity-80 shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div className="relative block h-[300px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </div>
        <div className="pt-5 p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <div
              className="text-center block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </div>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <Link
                    href={spotifylink}
                    
                  >
                  <Image
                    src="/images/logo/Spotify.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden dark:block"
                  />
                  <Image
                    src="/images/logo/Black_Spotify.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="dark:hidden"
                  />
                </Link>
                </div>
                <div>
                  <Link
                    href={ytlink}
                  >
                   <Image
                    src="/images/logo/YouTube.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden dark:block"
                  />
                  <Image
                    src="/images/logo/Black_youtube.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="dark:hidden"
                  />
                  </Link>
                  </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
