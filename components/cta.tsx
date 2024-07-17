import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-[72px] text-center sm:py-24">
      <div className="container max-w-2xl">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="mt-6 text-balance text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-2.5 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <Button className="h-12">Get access</Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
