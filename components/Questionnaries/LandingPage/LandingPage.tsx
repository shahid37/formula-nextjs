import React from "react";

// Components
import Button from "@/components/Button";
import { useRouter } from "next/router";
import usePersistentState from "@/hooks/usePersistentState";
import { useInView } from "react-intersection-observer";

const Container = ({ children, className }: any) => (
  <div
    className={`max-w-[1512px] xs:w-[91%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const LandingPage = () => {
  const router = useRouter();
  const [isCreateQuestion, setIsCreateQuestion] = usePersistentState(
    "isCreateQuestion",
    false
  );
  const [currentQuestion, setCurrentQuestion] = usePersistentState(
    "currentQuestion",
    0
  );

  const { ref: headingToAnimate, inView: isAnimatedHeadingIsInView } =
    useInView({
      triggerOnce: true,
    });
  const { ref: paragraphToAnimate, inView: isAnimatedParagraphIsInView } =
    useInView({
      triggerOnce: true,
    });
  const { ref: buttonToAnimate, inView: isAnimatedButonIsInView } = useInView({
    triggerOnce: true,
  });

  const onClick = () => {
    setIsCreateQuestion(false);
    localStorage.clear();
    setCurrentQuestion(0);
    router.push("/questionnaries");
  };

  return (
    <section className="xs:h-[100%] lg:h-[100%] 2xl:h-screen overflow-hidden relative">
      <div
        className="hidden sm:block xs:h-auto lg:h-[100%] 2xl:h-screen absolute top-0 right-0 bottom-0 left-0 z-[-1] xs:bg-inherit lg:bg-center"
        style={{
          backgroundImage: `linear-gradient(192.53deg, rgba(0, 0, 0, 0) 16.68%, rgba(0, 0, 0, 0.523123) 63.94%, rgba(0, 0, 0, 0.6) 99.49%), url('/assets/questionnaire.png')`,
          backgroundSize: "cover",
          width: "100%",
        }}
      />
      <div
        className="block sm:hidden xs:h-auto lg:h-[100%] 2xl:h-screen absolute top-0 right-0 bottom-0 left-0 z-[-1] xs:bg-inherit lg:bg-center"
        style={{
          backgroundImage: `linear-gradient(192.53deg, rgba(0, 0, 0, 0) 16.68%, rgba(0, 0, 0, 0.523123) 63.94%, rgba(0, 0, 0, 0.6) 99.49%), url('/assets/question-home.svg')`,
          backgroundSize: "cover",
          width: "100%",
        }}
      />
      <Container className="h-[100%] pt-16 xs:pb-[32px] lg:pb-0 flex justify-start xs:items-end lg:items-center 2xl:items-end 2xl:pb-[120px]">
        <div
          ref={headingToAnimate}
          className={`xs:max-w-[358px] lg:max-w-[612px] mr-auto lg:py-[100px] 2xl:pt-0 2xl:pb-0 ${
            isAnimatedHeadingIsInView === true
              ? "opacity-100 addFadeUpAnimation"
              : "opacity-0"
          }`}
        >
          <h2
            ref={paragraphToAnimate}
            className={`text-white xs:text-[32px] xs:leading-[109%] lg:text-[54px] lg:leading-[60px] 2xl:text-[64px] 2xl:leading-[64px] ${
              isAnimatedParagraphIsInView === true
                ? "opacity-100 addFadeUpAnimation"
                : "opacity-0"
            }`}
          >
            Creation of your customized pain formula is almost complete!
          </h2>
          {isAnimatedHeadingIsInView && (
            <p className="mt-6 max-w-[301px] font-light text-white opacity-80 xs:text-[16px] xs:leading-[19px] md:text-[20px] md:leading-6">
              Answer the following questions as best as you can.
            </p>
          )}
          {isAnimatedParagraphIsInView && (
            <div
              ref={buttonToAnimate}
              className={`xs:mt-[40px] lg:mt-16 2xl:mt-20 max-w-[358px] w-[100%] ${
                isAnimatedButonIsInView === true
                  ? "opacity-100 addFadeUpAnimation"
                  : "opacity-0"
              }`}
            >
              <Button onClick={onClick}>CREATE MY FORMULA</Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default LandingPage;
