import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import HayWireLogo from "../components/HayWireLogo.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="mx-auto min-h-screen">
      <Head>
        <title>The Hay Wire</title>
      </Head>
      <div class="md:max-w-screen mx-auto flex flex-col items-center justify-center">
        <HayWireLogo />
      </div>
    </div>
  );
});
