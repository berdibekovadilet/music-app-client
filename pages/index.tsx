import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container maxWidth="sm">
          <div className="main_wrapper">
            <h2>Добро пожаловать</h2>
            <h3>Здесь собраны лучшие треки</h3>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default index;
