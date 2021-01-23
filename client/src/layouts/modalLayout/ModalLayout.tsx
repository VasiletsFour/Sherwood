import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ModalLayout.scss";

const root: HTMLElement | null = document.getElementById("root");
const modalRoot: HTMLElement | null = document.getElementById("modal-root");

interface Props {
}

export class ModalLayout extends React.Component {
    el: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.el = document.createElement("div");
        this.el.classList.add("modal", "modal_default");
    }

    componentDidMount() {
        if (modalRoot && root) {
            modalRoot.appendChild(this.el);
            root.classList.add("preventScroll")
        }
    }

    componentWillUnmount() {
        if (modalRoot && root) {
            modalRoot.removeChild(this.el);
            root.classList.remove("preventScroll");
        }
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
