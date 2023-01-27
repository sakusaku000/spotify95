export default {
    namespaced:true,
    state:{
        user:null
    },
    mutations:{
        setUser(state, user) {
            state.user = user
        }
    },
    actions:{
        fetch(context) {
            return new Promise(async (resolve, reject) => {
                try {
                    const user = await context.rootState.api.getMe();
                    context.commit("setUser", user.body);
                    return resolve();
                } catch (err) {
                    console.error(err);
                    return reject("Failed to retrieve user information");
                };
            });
        }
    }
}