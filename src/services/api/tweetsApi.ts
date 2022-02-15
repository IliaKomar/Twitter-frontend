import axios from "axios";
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
    async getTweets(): Promise<TweetsState['items']> {
        const { data } = await axios.get('https://trycode.pw/c/7I3TX.json');
        return data;
    }
}
