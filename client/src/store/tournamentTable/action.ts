import {defineApiCallAction} from "../../libs/rd-action-creator";
import {TournamentTableApi} from "../../request/TournamentTableApi";

export const getTournamentTableAction = defineApiCallAction<{}, { data: TournamentTableApi }, { error: string }>("get-tournament-table");