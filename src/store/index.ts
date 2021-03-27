import Vuex from 'vuex'
import Vue from 'vue'
import frame, {State as FrameState} from "@/store/frame";

Vue.use(Vuex)

export interface State {
    frame: FrameState
}

export default new Vuex.Store({
    modules: {
        frame
    }
})



