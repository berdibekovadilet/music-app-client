import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/tracks";

const TrackPage = () => {
  const router = useRouter();
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
  return (
    <MainLayout>
      <Button variant={"outlined"} onClick={() => router.push("/tracks")}>
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
