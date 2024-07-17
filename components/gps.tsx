import Link from "next/link";

const Gps = () => {
  return (
    <div className="bg-white bg-gradient-to-r from-[rgb(41,_216,_255,_0.7)] via-[rgb(255,_253,_128,_0.7)] to-[rgb(252,_214,_255,_0.7)] text-black">
      <div className="container py-3 text-center">
        <p className="text-balance font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface &mdash;{" "}
          </span>
          <Link href="#" className="underline underline-offset-4">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Gps;
