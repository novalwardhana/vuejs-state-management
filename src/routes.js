import Getter from "./components/Getter/Getter.vue"
import MutationSetData from "./components/MutationSetData/MutationSetData.vue"
import MutationSetDataUser from "./components/MutationSetDataUser/MutationSetDataUser.vue"
import MutationClearData from "./components/MutationClearData/MutationClearData.vue"

const routes = [
    {path: "/", component: Getter},
    {path: "/getter", component: Getter},
    {path: "/mutation-set-data", component: MutationSetData},
    {path: "/mutation-set-data-user", component: MutationSetDataUser},
    {path: "/mutation-clear-data", component: MutationClearData}
]

export default routes