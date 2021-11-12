import React, { lazy, useState, Suspense } from "react";
import Agreement from "./Agreement";
import ErrorBoundary from "./ErrorBoundary";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Main = lazy(() => import("./Main"));

function ErrorScreen({ error }) {
  return (
    <div>
      <p>An error have occured {error}</p>
    </div>
  );
}

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <ErrorBoundary fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}
