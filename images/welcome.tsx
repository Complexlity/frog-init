export function WelcomeImage({
  status,
  fruit,
}: {
		status: "initial" | "redirect" | "response";
		fruit?: string
}) {
  return (
    <div
      style={{
        alignItems: "center",
        background:
          status === "response"
            ? "linear-gradient(to right, #432889, #17101F)"
            : "black",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 60,
          fontStyle: "normal",
          letterSpacing: "-0.025em",
          lineHeight: 1.4,
          marginTop: 30,
          padding: "0 120px",
          whiteSpace: "pre-wrap",
        }}
      >
        {status === "response"
          ? `Nice choice.${fruit ? ` ${fruit.toUpperCase()}!!` : ""}`
          : "Welcome!"}
      </div>
      <div tw="text-orange-400 bg-blue-300 text-4xl text-black rounded-full px-4 py-4">
        How are you today
        Are you okay
      </div>
    </div>
  );
}