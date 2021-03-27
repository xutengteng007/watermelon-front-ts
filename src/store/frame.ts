import {ActionTree, MutationTree} from 'vuex';

export interface State {
    drawer: boolean;
}

const lState: State = {
    drawer: false,
};

// mutations
const mutations: MutationTree<State> = {
    setDrawer(state: State, data: any) {
        state.drawer = !state.drawer
    },
};

// actions
const actions: ActionTree<State, any> = {};

export default {
    state: lState,
    actions,
    mutations,
};
