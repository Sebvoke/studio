import type { NextPageContext } from "next";

const statusCodes: Record<number, string> = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error",
};

type ErrorProps = { statusCode?: number; title?: string };

function ErrorPage({ statusCode = 404, title }: ErrorProps) {
  const message = title || statusCodes[statusCode] || "An unexpected error has occurred";
  return (
    <div
      style={{
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ lineHeight: "48px" }}>
        {statusCode ? (
          <h1 style={{ display: "inline-block", margin: "0 20px 0 0", paddingRight: 23, fontSize: 24, fontWeight: 500 }}>
            {statusCode}
          </h1>
        ) : null}
        <div style={{ display: "inline-block" }}>
          <h2 style={{ fontSize: 14, fontWeight: 400, lineHeight: "28px" }}>{message}.</h2>
        </div>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
