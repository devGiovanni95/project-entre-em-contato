import style from './Redes.module.css'
interface Props {
  href: string;
  texto: string;
  img?: string;
}

export default function Redes({ href, texto, img }: Props) {
  return (
    <>
      <div className={style.principal}>
        <a href={href}>
          <button className={style.container}>
            <img className={style.card} src={img} alt="" />
            {texto}
          </button>
        </a>
      </div>
    </>
  );
}
