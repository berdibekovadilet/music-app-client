import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/action-creators/track";

const index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
  }
);
