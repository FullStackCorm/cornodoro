import Labels from "./components/Labels";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import Modal from "./components/Modal";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import useCalculateTime from "./hooks/useCalculateTime";
import { controllers } from "./constants/constants";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpotifyPlayer from './components/SpotifyPlayer';

const App = () => {
  const { cornodoro, selectedControl, setCornodoro, setSelectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
  const { minutes, seconds } = useCalculateTime({ cornodoro, selectedControl });
  const [isSettingsOn, setIsSettingsOn] = useState(false);

  document.title = `${controllers[selectedControl].label} - ${minutes < 9 ? "0" : ""}${minutes}:${seconds < 9 ? "0" : ""}${seconds}`;

  return (
    <main className="relative flex flex-col justify-center items-center start-here block modal bg-white/[.75] w-[20rem] md:w-[28rem] rounded-3xl pt-6 ">
      <Labels
        resetTimerValues={resetTimerValues}
        selectedControl={selectedControl}
        setSelectedControl={setSelectedControl}
        setCornodoro={setCornodoro}
      />
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold relative">
            <CircularProgressbarWithChildren
              strokeWidth={2}
              trailColor="transparent"
              value={getRemainingTimePercentage()}
              styles={buildStyles({
                trailColor: "transparent",
                pathColor: "#68d37f",
              })}>
              <TimeDisplay
                cornodoro={cornodoro}
                selectedControl={selectedControl}
              />
              <ToggleButton
                cornodoro={cornodoro}
                setCornodoro={setCornodoro}
              />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <button onClick={() => setIsSettingsOn(true)} className='m-2 bg-pmd-blue-900 rounded-full'>
        
        <AccessTimeIcon 
          className="m-2 pmd-green-600"
          />
      </button>
      <Modal
        isSettingsOn={isSettingsOn}
        setIsSettingsOn={setIsSettingsOn}
        setCornodoro={setCornodoro}
      />
    </main>
  );
};

export default App;