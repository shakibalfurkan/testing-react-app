export default function FruitList({ fruits }: { fruits: string[] }) {
  return (
    <section>
      <p>Fruit List</p>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </section>
  );
}
