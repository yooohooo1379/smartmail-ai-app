interface Props {
  placeholder?: string;
}

export default function EmailInput({ placeholder }: Props) {
  return (
    <textarea
      placeholder={placeholder || "Paste your email here..."}
      style={{
        width: "100%",
        height: "220px",
        padding: "12px",
        marginTop: "20px",
      }}
    />
  );
}