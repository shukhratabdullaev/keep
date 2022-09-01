import Link from "@mui/material/Link/Link";
import { useContext } from "react";
import CardContext from "../../context/card-context";
import { navData } from "../../data/navData";
import styles from './Sidebar.module.scss';


export const Sidebar = () => {
  const { isSideBarOpen } = useContext(CardContext)


  return (
    <div className={isSideBarOpen ? styles.sidebar : styles.sidebarClosed}>

      {navData.map(item => {
        return <Link key={item.id} href='#' underline="hover" color='white' className={styles.sideitem}>
          {item.icon}
          <span className={styles.linkText}>{item.text}</span>
        </Link>
      })}
    </div>
  )
} 