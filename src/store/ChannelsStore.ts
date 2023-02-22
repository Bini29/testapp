import { observable, action, makeAutoObservable } from "mobx";
import { fetchChannels } from "../api/fetchChannels";

export interface IChanel {
  timestart: number;
  timestop: number;
  title: string;
  desc: string;
  rating: number;
}

export class ChannelsStore {
  @observable channels: IChanel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchChannels = () => {
    fetchChannels().then((data) => (this.channels = data));
  };

  @action addChannels = (channels: IChanel) => {
    this.channels.push(channels);
  };
}
