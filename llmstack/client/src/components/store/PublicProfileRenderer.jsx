import { lazy, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { axios } from "../../data/axios";
import { useState } from "react";

const PinnedPosts = lazy(() => import("./PinnedPosts"));
const PublicProfileHeader = lazy(() => import("./PublicProfileHeader"));
const SessionRenderer = lazy(() => import("./SessionRenderer"));

const PublicProfileRenderer = ({ username, postSlug }) => {
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    if (postSlug) {
      axios()
        .get(`/api/profiles/${username}/posts/${postSlug}`)
        .then((response) => {
          setSessionData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [username, postSlug]);

  return (
    <Grid container spacing={1} direction={"column"} sx={{ height: "100%" }}>
      <Grid>
        <PublicProfileHeader username={username} sessionData={sessionData} />
      </Grid>
      <Grid
        sx={{
          flex: 1,
          padding: 4,
          paddingBottom: 0,
          height: 0,
          overflow: "auto",
        }}
      >
        {postSlug ? (
          <SessionRenderer sessionData={sessionData} noHeader skipSteps />
        ) : (
          <PinnedPosts username={username} />
        )}
      </Grid>
    </Grid>
  );
};

export default PublicProfileRenderer;
