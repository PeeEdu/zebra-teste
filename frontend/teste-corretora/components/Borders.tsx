import style from '../style/borders.module.css'

export default async function Borders() {
  return (
      <>
        <div className={style.red}></div>
        <div className={style.green}></div>
        <div className={style.blue}></div>
        <div className={style.yellow}></div>
      </>
  );
}
