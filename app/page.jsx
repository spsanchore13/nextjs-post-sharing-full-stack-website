import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minus
          recusandae et eveniet cum alias, nesciunt, vero laboriosam possimus
          placeat labore, rem in! Impedit nobis, accusamus nemo dolore esse
          dignissimos.
        </p>

        {/* Feed Components */}
        <Feed />
      </section>
    </div>
  );
};

export default Home;
