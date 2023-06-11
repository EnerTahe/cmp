import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px] "
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto  text-center mb-12 rounded-md bg-gray !bg-opacity-70 py-11 px-8 dark:bg-black dark:!bg-opacity-70 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".2s"
              >
                
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Chamber Music Publishing
                <Image src="/images/logo/Copyright.svg" alt="logo" width={30} height={30} className=" pb-10 mx-2 inline-block" />
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-black dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                CMP, the hottest there is.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                    href="https://open.spotify.com/artist/08B1H2PvEbGidpHXkTgd5G"
                    
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
                  <Link
                    href="https://www.youtube.com/@cmponit"
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
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        </div>
      </section>
    </>
  );
};

export default Hero;
