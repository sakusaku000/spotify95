import { createStore } from "vuex";
import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
    clientId:import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
});

// modules

export default createStore({
    state:{
        api:api,
        ready:false,
        authenticationNeeded:false,
        error:{
            show:false,
            message:""
        }
    },
    mutations:{
        setReady(state, ready) {
            state.ready = ready;
        },
        showError(state, error) {
            state.error.show = true;
            state.error.message = error;
        }
    },
    modules:{

    }
});