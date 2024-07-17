import { Logos } from "./ui/icons";
import Marquee from "./ui/marquee";

const Brands = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="container">
        <h2 className="mb-9 text-center text-xl text-foreground/70">
          Trusted by the world&apos;s most innovative teams
        </h2>

        <Marquee
          pauseOnHover
          fade
          className="[--gap:2rem] sm:[--gap:4rem] lg:[--duration:80s] [&_svg]:h-8 [&_svg]:w-auto"
        >
          <Logos.Aurora className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Basel className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Bern className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Madrid className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Manilla className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Monochrome className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Oslo className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
          <Logos.Sydney className="cursor-pointer text-foreground/50 transition hover:text-foreground" />
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
