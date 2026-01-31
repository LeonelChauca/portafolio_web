import { MainHero } from "./Hero/MainHero";
import { TopHero } from "./Hero/TopHero";
import BadgeComponent from "./ui/BadgeComponent";
import Container from "./ui/Container";

export const Hero = () => {
  return (
    <section className="mt-32 text-white">
      <Container>
        <div className="flex flex-col gap-6">
          <TopHero />
          <MainHero />
        </div>
      </Container>
    </section>
  );
};
