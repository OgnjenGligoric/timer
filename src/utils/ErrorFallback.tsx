import { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div>
            <p>Something went wrong:</p>
            <p>{error.message}</p>
        </div>
    );
}
