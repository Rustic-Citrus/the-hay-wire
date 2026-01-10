import { define } from "../utils.ts";
import HayWireLogo from "../components/HayWireLogo.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Alert from "../islands/Alert.tsx";

export default define.page(function Home(ctx) {
  return (
    <div>
      <Alert message="The Hay Wire is a new idea and is still being developed. Come back later for more updates." />
      <div class="flex flex-col min-h-screen">
        <Header />
        <div class="md:max-w-screen flex flex-col items-center justify-center grow">
          <HayWireLogo />
        </div>
        <Footer />
      </div>
    </div>
  );
});
