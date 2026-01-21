import { define } from "@/utils.ts";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import Alert from "@/islands/Alert.tsx";

export default define.page(function Home(_ctx) {
  return (
    <div>
      <Alert message="The Hay Wire is a new idea and is still being developed. Come back later for more updates." />
      <div class="flex flex-col min-h-screen">
        <Header />
        <div class="md:max-w-screen flex flex-col items-center justify-center grow">
          <div class="hero min-h-screen">
            <svg
              viewBox="0 0 600 400"
              class="col-start-1 row-start-1 w-full max-w-500 absolute"
              aria-label="An animated drawing of a curvy line"
            >
              <path
                d="M 50,200 
                   C 100,200 130,210 140,180 
                   C 155,130 115,130 120,200 
                   C 125,270 160,280 170,230 
                   C 180,180 230,160 250,200 
                   C 270,240 310,240 300,190 
                   C 290,140 250,150 255,200 
                   C 260,250 340,230 360,190 
                   C 380,150 420,160 410,210 
                   C 400,260 360,240 380,190 
                   C 400,140 480,180 550,180"
                fill="none"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                pathLength="1"
                class="custom-path-01 stroke-base-content/25"
              />
            </svg>
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
              <div class="max-w-xl">
                <h1 class="col-start-1 row-start-1 z-10 font-[Walter_Turncoat] text-base-content text-center text-4xl mb-5 sm:text-5xl md:text-7xl xl:text-9xl">
                  The Hay Wire
                </h1>
                <p class="mb-10 mt-5 text-base-content text-xl font-semibold">
                  Stories from a town with above average quirkiness.
                </p>
                <a href="mailto:stories@thehaywire.org">
                  <button
                    class="btn btn-primary btn-lg"
                    type="button"
                    aria-label="Send a story in an email to stories@thehaywire.org"
                  >
                    Tell your story
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
});
