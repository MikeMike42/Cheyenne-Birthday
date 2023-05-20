import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AlanJackson from './resources/alanjackson.jpg';
import audio from './resources/rememberwhen.mp3';
import PauseIcon from '@mui/icons-material/Pause';

export default function MusicSection() {
  const theme = useTheme()
  const [isPaused, setIsPaused] = useState(true)
  const [rememberWhenAudio, setRememberWhenAudio] = useState(new Audio(audio))

  useEffect(() => {
    rememberWhenAudio.addEventListener("ended", () => {
      rememberWhenAudio.currentTime = 0
      setIsPaused(true)
    })
  }, [])

  const toggleMusic = () => {
    if (isPaused) {
      rememberWhenAudio.play()
      setIsPaused(false)
    } else {
      rememberWhenAudio.pause()
      setIsPaused(true)
    }
  }

  return (<>
    <Typography sx={{ mt: 3, fontSize: '.7rem' }}>Alan Jackson thinks you're young...</Typography>
    <Card sx={{ mt: 1, mb: 3, ml: 'auto', mr: 'auto', display: 'flex', width: 'fit-content' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" fontSize={'1rem'}>
            Remember When
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={'.8rem'}>
            Alan Jackson
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" disabled>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={toggleMusic}>
            {isPaused ?
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              :
              <PauseIcon sx={{ height: 38, width: 38 }} /> 
            }
          </IconButton>
          <IconButton aria-label="next" disabled>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={AlanJackson}
        alt="Alan Jackson greatest hits album"
      />
    </Card>
  </>)
}