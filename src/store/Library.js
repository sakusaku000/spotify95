export default {
    namespaced:true,
    state:{
        songs:{
            list:[],
            page:0
        },
        albums:{
            list:[],
            page:0
        },
        artists:{
            list:[],
            page:0
        }
    },
    mutations:{
        addSongs(state, data) {
            if (data) {
                data.forEach(item => {
                    state.songs.list.push(item);
                });
            }
        },
        addAlbums(state, data) {
            if (data) {
                data.forEach(item => {
                    state.albums.list.push(item);
                });
            }
        },
        addArtists(state, data) {
            if (data) {
                data.forEach(item => {
                    state.artists.list.push(item);
                });
            }
        },
        increaseSongPage(state) {
            state.songs.page += 50;
        },
        increaseAlbumPage(state) {
            state.albums.page += 50;
        },
        increaseArtistPage(state) {
            state.artists.page += 50;
        }
    },
    actions:{
        fetch(context) {
            return new Promise(async (resolve, reject) => {
                try {
                    const songsFetch1 = await context.rootState.api.getMySavedTracks({limit:50});
                    context.commit("increaseSongPage");
                    context.commit("addSongs", songsFetch1.body.items);
                    console.log(context.state.songs.page);
                    const songsFetch2 = await context.rootState.api.getMySavedTracks({limit:50, offset:context.state.songs.page});
                    context.commit("increaseSongPage");
                    context.commit("addSongs", songsFetch2.body.items);

                    const albumsFetch1 = await context.rootState.api.getMySavedAlbums({limit:50});
                    context.commit("increaseAlbumPage");
                    context.commit("addAlbums", albumsFetch1.body.items);
                    const albumsFetch2 = await context.rootState.api.getMySavedAlbums({limit:50, offset:context.state.albums.page});
                    context.commit("increaseAlbumPage");
                    context.commit("addAlbums", albumsFetch2.body.items);

                    const artistsFetch1 = await context.rootState.api.getFollowedArtists({limit:50});
                    context.commit("increaseArtistPage");
                    context.commit("addArtists", artistsFetch1.body.items);
                    const artistsFetch2 = await context.rootState.api.getFollowedArtists({limit:50, offset:context.state.artists.page});
                    context.commit("increaseArtistPage");
                    context.commit("addArtists", artistsFetch2.body.items);

                    return resolve();
                } catch (err) {
                    console.error(err);
                    return reject("Failed to retrieve user library");
                };
            });
        },
        async fetchMore(context, type) {
            try {
                if (type === "songs") {
                    const songFetch = await context.rootState.api.getMySavedTracks({limit:50, offset:context.state.songs.page});
                    context.commit("increaseSongPage");
                    context.commit("addSongs", songFetch.body.items);
                }
                else if (type === "artists") {
                    const artistsFetch = await context.rootState.api.getFollowedArtists({limit:50, offset:context.staet.artists.page});
                    context.commit("increaseArtistPage");
                    context.commit("addArtists", artistsFetch.body.items);
                }
                else if (type === "albums") {
                    const albumsFetch = await context.rootState.api.getMySavedAlbums({limit:50, offset:context.state.albums.page});
                    context.commit("increaseAlbumPage");
                    context.commit("addAlbums", albumsFetch.body.items);
                }
                else {
                    return reject("Type invalid");
                }
            } catch (err) {
                console.error(err);
                return reject("Failed to retrieve user library");
            }
        }
    }
}