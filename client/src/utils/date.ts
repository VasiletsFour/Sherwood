export const timeStampToDate = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleString("ru-Ru", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

