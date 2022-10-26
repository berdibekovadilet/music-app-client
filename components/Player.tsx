import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/tracks";
import TrackProgress from "./TrackProgress";

let audio;

const Player = () => {
  const track: ITrack = {
    _id: "1",
    name: "Unholy",
    artist: "Sam Smith",
    text: "Mummy don't know daddy's getting hot At the body shop, doing something unholy He lucky, lucky, yeah (ooh) He lucky, lucky, yeah (ye-yeah) He lucky, lucky, yeah He lucky, lucky, yeah A lucky, lucky girl She got married to a boy like you She'd kick you out if she ever, ever knew 'Bout all the - you tell me that you do Dirty, dirty boy You know everyone is talking on the scene I hear them whispering 'bout the places that you've been And how you don't know how to keep your business clean...",
    listens: 5,
    audio:
      "http://localhost:8000/audio/a51e3fcb-4787-450d-a514-7f47cf986890.mp3",
    picture:
      "http://localhost:8000/image/c5b43159-5cff-49b5-8eeb-d500f71dbb24.webp",
    comments: [],
  };

  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );
  const { pauseTrack, playTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src = track.audio;
    } else {
      play();
    }
  }, [active]);

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };
  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track?.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={10} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
