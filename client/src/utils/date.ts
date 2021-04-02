const oneThousand = 1000


export const timeStampToDate = (timestamp: number) => (
    new Date(timestamp * oneThousand).toLocaleString("ru-Ru", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }));

export const dateToTimeStamp = (value: string) => Math.round(new Date(value).getTime() / oneThousand)

