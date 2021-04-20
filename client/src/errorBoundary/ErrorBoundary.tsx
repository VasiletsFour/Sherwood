import * as React from "react";
import {TechnicalWork} from "../page";

interface ErrorBoundaryProps {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryProps> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error:any) {
        console.log(error)
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <TechnicalWork/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
