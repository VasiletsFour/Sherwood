import {Season} from "./dateApi";

const oneThousand = 1000

export const dateSeason = (): Season => {
        const month = new Date().getMonth()

        if (month < 3 || month === 11) return "Зима"
        if (month > 2 && month < 5) return "Весна"
        if (month > 4 && month < 8) return "Лето"

        return "Осень"
}

export const timeStampToDate = (timestamp: number): string => (
    new Date(timestamp * oneThousand).toLocaleString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "short",
            year: "numeric",
    }));

export const dateToTimeStamp = (value: string): number => Math.round(new Date(value).getTime() / oneThousand)

