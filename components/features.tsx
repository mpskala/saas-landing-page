import Feature from "./feature";
import { Icons } from "./ui/icons";

const featureList = [
  {
    title: "Build",
    description:
      "Create a full-function marketplace, customize the storefront, and list unlimited NFTs. We get you ready within hours, not days.",
    icon: <Icons.Build />,
  },
  {
    title: "Sell",
    description:
      "Secure every buyer with multiple selling & payment options. Boost sales even further with different tactics to create urgency and reward buyers.",
    icon: <Icons.Sell />,
  },
  {
    title: "Grow",
    description:
      "The built-in tech stack that helps you drive organic traffic, launch high-converting campaigns and better understand your customers.",
    icon: <Icons.Grow />,
  },
];

const Features = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          NFTs are here to stay.
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-balance text-center text-xl text-foreground/70">
            Bound to be an integral part of future economy, there&apos;s no
            better time than now to onboard the NFT space, and build a brand
            that is ready for immense growth ahead.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {featureList.map(({ title, description, icon }) => (
            <Feature
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
