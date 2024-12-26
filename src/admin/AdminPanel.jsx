import React from "react";
import styles from "./AdminPanel.module.css"; // Import the CSS Module
import RouteChangeRequest from "./RouteChange/RouteChangeRequest";
import Member from "./Memberlist/MemberList";
import BusCard from "../pages/Transport/BusCard/BusCard";
import RequestListPage from "./RequestListPage/RequestListPage";
import { IsUserLoggedIn } from "../utils/checkUser";
import RouteForm from "../components/RouteForm/RouteForm";

function AdminPanel() {
  IsUserLoggedIn();

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminContainer}>
        {/* Header */}
        <header className={styles.adminHeader}>
          <h1>Admin Panel</h1>
          <p>Manage users, content, and site settings</p>
        </header>
      </div>
      {/* <RouteChangeRequest /> */}
      <RequestListPage />
      <Member />
      <BusCard />
      {/* <RouteForm /> */}
    </div>
  );
}

export default AdminPanel;
