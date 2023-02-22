import axios from "axios";

export const fetchChannels = async () => {
  const { data } = await axios.post(
    "https://limehd.online/playlist/main-playlist.json"
  );

  return data.channels;
};
