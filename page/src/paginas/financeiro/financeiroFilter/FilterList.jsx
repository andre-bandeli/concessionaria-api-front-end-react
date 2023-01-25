import './filterList.scss'


export default function FilterList({ id, title, active, setSelected }) {
    return (
      <li
        className={active ? "filterList active" : "filterList"}
        onClick={() => setSelected(id)}
      >
       <h3>{title}</h3>
      </li>
    );
  }