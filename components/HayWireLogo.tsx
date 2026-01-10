export default function HayWireLogo() {
  return (
    <div class="flex flex-col w-full">
      <div class="flex-1 grid place-items-center">
        <h1 class="col-start-1 row-start-1 z-10 mb-32 sm:mb-36 md:mb-72 xl:mb-108 font-playful text-center text-4xl sm:text-5xl md:text-7xl xl:text-9xl">
          The Hay Wire
        </h1>
        <svg
          viewBox="0 0 600 400"
          class="col-start-1 row-start-1 w-full h-full"
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
            class="custom-path-01 stroke-primary-content"
          />
        </svg>
      </div>
    </div>
  );
}
