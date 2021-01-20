import { Action } from "redux";

export interface ActionCreatorProps<TActionFields> {
    is(action: Action): action is Action & TActionFields;
    type: string;
    typeInterface: TActionFields & Action;
}

export interface ActionCreator<TParams, TActionFields = TParams> extends ActionCreatorProps<TActionFields> {
    (params?: TParams): Action & TActionFields;
}

export function defineAction<TActionFields = {}>(
    type: string | { type: string; subtype: string },
    defaults?: Partial<TActionFields>
): ActionCreator<TActionFields, TActionFields> {
    return defineActionFactory<TActionFields, TActionFields>(type, (fields) => ({
        ...(defaults || ({} as any)),
        ...(fields as any),
    }));
}

export function defineActionFactory<TParams, TActionFields = TParams>(
    type: string | { type: string; subtype: string },
    factory: (params: TParams) => TActionFields
): ActionCreator<TParams, TActionFields> {
    type = typeof type === "string" ? generateActionType(type, "") : generateActionType(type.type, type.subtype);

    const creator: ActionCreator<TParams, TActionFields> = ((params: TParams = {} as TParams) => ({
        ...(factory(params || ({} as TParams)) as any),
        type,
    })) as any;

    creator.is = (action: Action): action is Action & TActionFields => {
        return !!action && (action.type || "").toUpperCase().trim() === type;
    };

    creator.type = type;

    /** Use only for typeof
     */
    creator.typeInterface = {} as TActionFields & Action;

    return creator;
}

export interface ApiCallActionSet<TParams, TResult, TError> {
    trigger: ActionCreator<TParams>;
    running: ActionCreator<TParams, TParams>;
    ok: ActionCreator<{ params: TParams; result: TResult }>;
    error: ActionCreator<{ params: TParams; error: TError }>;
}

export function defineApiCallAction<TParams, TResult, TError = any>(
    type: string
): ApiCallActionSet<TParams, TResult, TError> {
    return {
        trigger: defineAction<TParams>({ type, subtype: "trigger" }),
        running: defineAction<TParams>({ type, subtype: "running" }),
        ok: defineAction<{ params: TParams; result: TResult }>({ type, subtype: "ok" }),
        error: defineAction<{ params: TParams; error: TError }>({ type, subtype: "error" }),
    };
}

const existingActionTypes = new Set<string>();

function generateActionType(type: string, subtype?: string): string {
    if (!type) {
        throw new Error("Action type is not defined.");
    }

    type = type.toUpperCase();

    let action = `RD: ${type} ${subtype ? ": " + subtype.toUpperCase() : ""}`;

    if (existingActionTypes.has(action)) {
        let index = 1;
        while (true) {
            const a = `${action} (${index}) ${subtype ? ": " + subtype.toUpperCase() : ""}`;

            if (!existingActionTypes.has(a)) {
                action = a;
                break;
            }

            index++;
        }
    }

    action = action.trim();

    existingActionTypes.add(action);

    return action;
}
