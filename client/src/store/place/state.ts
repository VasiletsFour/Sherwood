import {PlaceApi} from "../../request/PlaceApi";
import {defaultState} from "../defaultState";

export interface PlaceState {
    placeAdmin: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: PlaceApi[] | null;
    };
}

export const initialPlaceState: PlaceState = {
    placeAdmin: defaultState
};
