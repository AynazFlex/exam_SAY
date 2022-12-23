import { FC, useState } from "react";
import styles from "./Block.module.css";
import { IBlock } from "./state";

const Block: FC<IBlock & {id: number}> = ({id, title, body, img}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.block}>
      <div
        style={{ background: open ? "rgb(13, 146, 146)" : "transparent" }}
        onClick={() => setOpen(!open)}
        className={styles.title}
      >
        {`${id} ${title}`}
      </div>
      {open && (
        <div className={styles.body}>
          {body?.map((item, i) => <p className={styles.p} key={i}>{item}</p>)}
          {img?.map((item, i) => <img className={styles.img} key={i} src={item} alt=""/>)}
        </div>
      )}
    </div>
  );
};

export default Block;
