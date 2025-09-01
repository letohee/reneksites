// Section.jsx
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}
