import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MemberListPage.module.css";
import { IsUserLoggedIn } from "../../../utils/checkUser";

const MemberListPage = () => {
  IsUserLoggedIn();
  const location = useLocation();
  const navigate = useNavigate();
  const { id: paramId } = useParams();

  const { busId: stateBusId } = location.state || {};
  const busId = stateBusId || paramId;

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (busId) {
      const fetchMembers = async () => {
        try {
          const response = await axios.get(`http://localhost:8081/api/v1/student/getStudent/${busId}`);
          setMembers(Array.isArray(response.data) ? response.data : [response.data]);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch member data.");
          setLoading(false);
        }
      };

      fetchMembers();
    } else {
      setError("Bus ID is missing.");
      setLoading(false);
    }
  }, [busId]);

  if (loading) {
    return <p className={styles.loading}>Loading member data...</p>;
  }

  if (error) {
    return (
      <div className={styles.errorPage}>
        <h1>{error}</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className={styles.memberListPage}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>
        Back
      </button>
      <h1>Member List for Bus {busId}</h1>
      <table className={styles.memberTable}>
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Year</th>
            <th>Department</th>
            <th>Category</th>
            <th>Bus Stop</th>
            <th>Contact</th>
            <th>Parent Contact</th>
          </tr>
        </thead>
        <tbody>
          {members.length ? (
            members.map((member) => (
              <tr key={member._id}>
                <td>{member.uid}</td>
                <td>{member.firstName}</td>
                <td>{member.gender}</td>
                <td>{member.year}</td>
                <td>{member.department}</td>
                <td>{member.category}</td>
                <td>{member.busStop}</td>
                <td>{member.contactNo}</td>
                <td>{member.parentContact}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className={styles.noData}>
                No members available for this bus.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MemberListPage;
