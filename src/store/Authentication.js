import axios from 'axios';

export default {
    namespaced:true,
    actions:{
        async authenticate(context, code) {
            return new Promise(async (resolve, reject) => {
                try {
                    const tokens = await axios.post("/api/token", {code:code});
                    localStorage.setItem("refresh", tokens.data.tokens.refresh);
                    sessionStorage.setItem("access", tokens.data.tokens.access);
    
                    context.rootState.api.setAccessToken(tokens.data.tokens.access);
                    context.rootState.api.setRefreshToken(tokens.data.tokens.refresh);
    
                    window.history.replaceState({}, "Spotify-95", "/");

                    return resolve();
                } catch (err) {
                    console.error(err);
                    return reject("Unable to authenticate with Spotify");
                };
            });
        },
        async refresh(context) {
            return new Promise(async (resolve, reject) => {
                try {
                    const tokens = await axios.post("/api/token/refresh", {token:localStorage.getItem("refresh")});
                    sessionStorage.setItem("access", tokens.data.token);
                    context.rootState.api.setAccessToken(tokens.data.token);

                    context.commit("backgroundTokenRefresh");
        
                    return resolve();
                } catch (err) {
                    console.error(err);
                    return reject("Lost connection to Spotify API");
                }
            });
        },
        backgroundTokenRefresh(context) {
            // refreshes token every 30 minutes if app is kept running
            setInterval(() => {
                context.dispatch("authentication/refresh", true);
            }, 1800000);
        }
    }
}