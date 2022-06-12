import React from "react";

import styles from "./sidebar.module.css";

import editIcon from "../../assets/editIcon.svg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="bg-perfil"
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/71967181?v=4"
          alt="profile-img"
        />
        <strong>Rafael Moura</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <img src={editIcon} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
