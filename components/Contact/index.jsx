const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container pb-20 mb-12">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full mt-10 px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-gray !bg-opacity-70 py-11 px-8 dark:bg-black dark:!bg-opacity-70 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-12 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Want to join us? Let us know!
              </h2>
              <p className="mb-3 text-base font-medium text:black dark:text-body-color">
                Below you can find a link, where you can insert your very own demo file of your song, we will listen to it and we&apos;ll see from there.</p>
              <p className="mb-12 text-base font-medium text:black dark:text-body-color">
                Our management team will get back to you as soon as possible.
              </p>

              <p className="mb-12 text-base font-medium text:black dark:text-body-color">
                Click <a className="underline font-bold" href="https://docs.google.com/forms/d/e/1FAIpQLSekPKWVWd0ETOPqWg6l8SRVBTs8F-GKwjl6dl2mW_XIZU-piQ/viewform">here</a> to fill the form.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
