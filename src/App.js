import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import ContentSection from "./ContentSection";
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';
import Cake from "./Cake";
import audio from './resources/birthday.mp3';
import { Box, IconButton } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function App() {
  const theme = useTheme()
  const countToDate = new Date("2023-05-21")
  countToDate.setHours(countToDate.getHours() + 4)
  countToDate.setMinutes(countToDate.getMinutes() + 45)
  const [cheyenneIsThirty, setCheyenneIsThirty] = useState(countToDate < new Date())
  const [birthdayAudio, setBirthdayAudio] = useState((new Audio(audio)))
  const [isPaused, setIsPaused] = useState(true)
  const { width, height } = useWindowSize()

  useEffect(() => {
    birthdayAudio.addEventListener("ended", () => {
      birthdayAudio.currentTime = 0
      setIsPaused(true)
    })
  }, [])

  const toggleMusic = () => {
    if (isPaused) {
      birthdayAudio.play()
      setIsPaused(false)
    } else {
      birthdayAudio.pause()
      setIsPaused(true)
    }
  }

  return (<>
    <Header 
      cheyenneIsThirty={cheyenneIsThirty} 
    />
    {cheyenneIsThirty && 
      <>
        <Cake />
        <Confetti 
          width={width - 20}
          height={height}
        />
      </>
    }
    <CountdownTimer 
      countToDate={countToDate}
      cheyenneIsThirty={cheyenneIsThirty} 
      setCheyenneIsThirty={setCheyenneIsThirty}
    />
    {cheyenneIsThirty && <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, mt: '1rem' }}>
        <IconButton aria-label="play/pause" onClick={toggleMusic}>
          {isPaused ?
            <>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              <p style={{ fontSize: ".5rem" }}>Play Music</p>
            </>
          :
            <>
              <PauseIcon sx={{ height: 38, width: 38 }} /> 
              <span style={{ fontSize: ".5rem" }}>Pause Music</span>
            </>
          }
        </IconButton>
      </Box>
    </>}
    <ContentSection />
  </>)
}

export default App;
