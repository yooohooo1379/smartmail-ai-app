interface Props {
  title: string;
  content: string;
}

export default function ResultBox({ title, content }: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>{title}</h2>

      <p>{content}</p>
    </div>
  );
}