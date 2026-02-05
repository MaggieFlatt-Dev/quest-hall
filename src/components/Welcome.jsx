import logo from "../assets/logo.png";

export const Welcome = () => {
  return (
    <main className="bg-charcoal min-h-screen w-full">
      <div className="flex justify-center pt-6">
        <img src={logo} alt="Quest Hall Logo" className="logo-primary" />
      </div>
      <section className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div>
        <button className="btn-secondary">Your Library</button>
        </div>
        <div>
          <div className="text-cream flex justify-center font-serif font-bold">
            COMING SOON!
          </div>
          <button className="btn-secondary">Taverns</button>
        </div>
      </section>
    </main>
  );
};
