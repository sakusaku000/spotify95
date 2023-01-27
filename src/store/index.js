import { createStore } from "vuex";
import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
    clientId:import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
});

// modules
import Authentication from './Authentication.js';
import Library from "./Library.js";
import User from "./User.js";

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
        showSplash(state) {
            state.authenticationNeeded = true;
        },
        showError(state, error) {
            state.error.ready = false;
            state.error.authenticationNeeded = false;
            state.error.show = true;
            state.error.message = error;
        },
        setAccessToken(state, token) {
            state.api.setAccessToken(token);
        }
    },
    modules:{
        authentication:Authentication,
        library:Library,
        user:User
    }
});