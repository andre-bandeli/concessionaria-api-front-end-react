import './produtosCategoriaList.css'


export default function ProdutosCategoriaList({ id, title, active, setSelected }) {
    return (
      <li
        className={active ? "produtoIndexList active" : "produtoIndexList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    );
  }