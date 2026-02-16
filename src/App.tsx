import calculator from "../images/icon-calculator.svg";
import karma from "../images/icon-karma.svg";
import supervisor from "../images/icon-supervisor.svg";
import teamBuilder from "../images/icon-team-builder.svg";

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col p-8">
      <div className="flex justify-center text-center flex-col max-w-87.5">
        <h1 className="font-light text-gray-400 text-2xl">
          Reliable, efficient delivery
        </h1>
        <h2 className="font-semibold text-gray-800 text-2xl mb-3">
          Powered by Technology
        </h2>
        <p className="text-[10px] text-gray-600 wrap-break-word">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="card-container mt-7 md:mt-0">
        <div className="card red relative">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>

          <img
            src={teamBuilder}
            alt="team-builder-icon-svg"
            className="w-11 h-11 absolute right-5 bottom-5"
          />
        </div>
        <div className="card cyan relative">
          <h3>Supervisor</h3>
          <p>Monitors activity to identify project roadblocks</p>

          <img
            src={supervisor}
            alt="supervisor-icon-svg"
            className="w-11 h-11 absolute right-5 bottom-5"
          />
        </div>
        <div className="card blue relative">
          <h3>Calculator</h3>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src={calculator}
            alt="calculator-icom-svg"
            className="w-11 h-11 absolute right-5 bottom-5"
          />
        </div>
        <div className="card yel relative">
          <h3>Karma</h3>
          <p>Regularly evaluates our talent to ensure quality</p>

          <img
            src={karma}
            alt="karma-icon-svg"
            className="w-11 h-11 absolute right-5 bottom-5"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
