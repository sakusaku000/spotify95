export default {
    namespaced:true,
    state:{
        songs:[],
        albums:[],
        artists:[]
    },
    mutations:{
        setSongs(state, data) {
            state.songs = data;
        },
        setAlbums(state, data) {
            state.albums = data;
        },
        setArtists(state, data) {
            state.artists = data;
        }
    },
    actions:{
        fetch(context) {
            return new Promise(async (resolve, reject) => {
                try {
                    const songs = await context.rootState.api.getMySavedTracks({limit:50});
                    const albums = await context.rootState.api.getMySavedAlbums({limit:50});
                    const artists = await context.rootState.api.getFollowedArtists({limit:50});
    
                    context.commit("setSongs", songs.body.items);
                    context.commit("setAlbums", albums.body.items);
                    context.commit("setArtists", artists.body.items);

                    return resolve();
                } catch (err) {
                    console.error(err);
                    return reject("Failed to retrieve user library");
                };
            });
        }
    }
}