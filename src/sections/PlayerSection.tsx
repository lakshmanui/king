import React, { useState, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";

import Record from "../components/Record";
import Recording from "../components/Recording";
import ListenRecording from "../components/ListenRecord";

const PlayerSection: React.FC = () => {
  const [blob, setBlob] = useState<any>();
  const [playerActions, setPlayerActions] = useState({
    start: true,
    stop: false,
    pause: false,
    play: false,
  });
  const [counter, setCounter] = useState(5);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

  const stream = useRef<MediaStream>();
  const recorderRef = useRef<RecordRTC>();
  let closeTimer: NodeJS.Timer;

  const startRecording = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    stream.current = mediaStream;
    setPlayerActions({
      ...playerActions,
      start: false,
      stop: true,
    });
    recorderRef.current = new RecordRTC(mediaStream, {
      type: "audio",
      mimeType: "audio/wav",
      recorderType: StereoAudioRecorder,
    });
    recorderRef.current.startRecording();
    check30Seconds();
  };

  const check30Seconds = () => {
    let count = 30;
    closeTimer = setInterval(() => {
      count--;
      if (count <= 0) {
        finishRecording();
      } else if (count <= 5) {
        setCounter(count);
        setShowTimerWarning(true);
      }
    }, 1000);
  };

  const pauseRecording = () => {
    setPlayerActions({
      ...playerActions,
      pause: true,
    });
    recorderRef?.current?.pauseRecording();
  };

  const resumeRecording = () => {
    setPlayerActions({
      ...playerActions,
      pause: false,
    });
    recorderRef?.current?.resumeRecording();
  };

  const closeStream = () => {
    stream?.current?.getTracks().forEach(function (track) {
      track.stop();
    });
  };

  const finishRecording = () => {
    clearInterval(closeTimer);
    setShowTimerWarning(false);
    closeStream();
    recorderRef?.current?.stopRecording(() => {
      setBlob(recorderRef?.current?.getBlob());
      setPlayerActions({
        ...playerActions,
        start: false,
        stop: false,
        play: true,
      });
    });
  };

  return (
    <React.Fragment>
      {playerActions.start ? (
        <Record startRecording={startRecording}></Record>
      ) : null}
      {playerActions.stop ? (
        <Recording
          resumeRecording={resumeRecording}
          pauseRecording={pauseRecording}
          finishRecording={finishRecording}
          pause={playerActions.pause}
        ></Recording>
      ) : null}
      {playerActions.play ? (
        <ListenRecording url={URL.createObjectURL(blob)}></ListenRecording>
      ) : null}
    </React.Fragment>

    // <Grid
    //   container
    //   spacing={2}
    //   sx={{ backgroundColor: "#300042", height: "350px" }}
    // >
    //   <Grid
    //     item
    //     xs={12}
    //     sm={12}
    //     md={12}
    //     lg={12}
    //     xl={12}
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Grid item xs={10} sm={6} md={3} lg={3} xl={4}>
    //       {showTimerWarning ? (
    //         <Grid
    //           item
    //           xs={12}
    //           sm={12}
    //           md={12}
    //           lg={12}
    //           xl={12}
    //           sx={{
    //             textAlign: "center",
    //             marginTop: "20px",
    //             marginBottom: "20px",
    //           }}
    //         >
    //           <Typography variant="h6" component="div" color="inherit">
    //             Recording will stop in {counter} sec
    //           </Typography>
    //         </Grid>
    //       ) : null}
    //       {playerActions.start ? (
    //         <Record startRecording={startRecording}></Record>
    //       ) : null}
    //       {playerActions.stop ? (
    //         <Recording
    //           resumeRecording={resumeRecording}
    //           pauseRecording={pauseRecording}
    //           finishRecording={finishRecording}
    //           pause={playerActions.pause}
    //         ></Recording>
    //       ) : null}
    //       {playerActions.play ? (
    //         <ListenRecording url={URL.createObjectURL(blob)}></ListenRecording>
    //       ) : null}
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};
export default PlayerSection;
