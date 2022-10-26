import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/tracks";

const index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Unholy",
      artist: "Sam Smith",
      text: "Текст будет позже",
      listens: 5,
      audio:
        "http://localhost:8000/audio/a51e3fcb-4787-450d-a514-7f47cf986890.mp3",
      picture:
        "http://localhost:8000/image/c5b43159-5cff-49b5-8eeb-d500f71dbb24.webp",
      comments: [],
    },
    {
      _id: "2",
      name: "In my feelings",
      artist: "Drake",
      text: "Текст будет позже",
      listens: 5,
      audio:
        "http://localhost:8000/audio/a51e3fcb-4787-450d-a514-7f47cf986890.mp3",
      picture:
        "http://localhost:8000/image/0eaf954c-ec5f-4d51-9c7f-44a44a2c17df.jpeg",
      comments: [],
    },
    {
      _id: "3",
      name: "Attention",
      artist: "Justin Bieber",
      text: "Текст будет позже",
      listens: 5,
      audio:
        "http://localhost:8000/audio/333ab38a-3e55-437c-b993-a66233bc6da1.mp3",
      picture:
        "http://localhost:8000/image/4becaa4c-346d-4793-8465-2641f2fdd92b.webp",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid>
        <Card>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h3>Список треков</h3>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
        </Card>
        <TrackList tracks={tracks} />
      </Grid>
    </MainLayout>
  );
};

export default index;
