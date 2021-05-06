import React from "react";
import {TeamApi} from "../../request/TeamApi";

export interface DragAndDropState {
    dropDepth: number
    inDropZone: boolean
    active: null | TeamApi
}

export const dragAndDropDefault = {
    dropDepth: 0,
    inDropZone: false,
    active: null
}

export const handleDragEnter = (event: React.DragEvent<HTMLDivElement>, setState: () => void) => {
    event.preventDefault()
    event.stopPropagation()

    setState()
}

export const handleDragEnd = (event: React.DragEvent<HTMLDivElement>, setState: () => void) => {
    event.preventDefault()
    event.stopPropagation()

    setState()
}

export const handleDragLeave = (event: React.DragEvent<HTMLDivElement>, dropDepth: number, setState: () => void) => {
    event.preventDefault()
    event.stopPropagation()

    if (dropDepth < 0) return

    setState()
}

export const handleDragOver = (event: React.DragEvent<HTMLDivElement>, dropDepth: number, setState: () => void) => {
    if (dropDepth === 0) return

    event.preventDefault()
    event.stopPropagation()

    event.dataTransfer.dropEffect = "copy"
    setState()
}

export const handleDrop = (event: React.DragEvent<HTMLDivElement>, setState: () => void) => {
    event.preventDefault()
    event.stopPropagation()

    event.dataTransfer.clearData();
    setState()
}