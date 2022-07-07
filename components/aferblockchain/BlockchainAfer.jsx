import classes from "../componentsstyles/TitleAndDes.module.css";

export default function BlockchainAfer(props) {
  const { title, desOne, desTwo } = props;
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.columnHead}>
          <h2>{title}</h2>
        </div>
        <div className={classes.columnDes}>
          <p className={classes.desText}>{desOne}</p>
          <p className={classes.desText}>{desTwo}</p>
        </div>
      </div>
    </section>
  );
}
