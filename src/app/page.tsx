export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>SmartMail AI App</h1>

      <p>
        AI-powered email assistant for summarizing emails and generating
        professional replies.
      </p>

      <textarea
        placeholder="Paste your email here..."
        style={{
          width: "100%",
          height: "200px",
          marginTop: "20px",
          padding: "12px",
        }}
      />

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        Generate AI Reply
      </button>
    </main>
  );
}