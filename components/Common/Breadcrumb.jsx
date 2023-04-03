import Link from "next/link";
import Image from "next/image";

const Breadcrumb = ({ pageName, description, image }) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 items-center">
            <div className="w-full px-4 wow fadeInUp mb-12 rounded-md bg-gray !bg-opacity-70 py-11 px-8 dark:bg-black dark:!bg-opacity-70 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <div className="mb-8 md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white">
                  {pageName}
                </h1>
                <div className="grid grid-cols-4 gap-10">
                <div>
                <Image
                    src={image}
                    alt="logo"
                    width={140}
                    height={30}
                    className="relative h-max w-max overflow-hidden rounded-full"
                  />
                  </div>
                  <div className="col-start-2 col-span-4">
                <div className="text-base font-medium leading-relaxed text:black dark:text-body-color">
                  {description}
                </div>
                </div>
                  </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Breadcrumb;
