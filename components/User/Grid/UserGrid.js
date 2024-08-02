
// -----------------------------------------------------------------------------
import React from 'react';
// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
import EmptyGridPlaceholder from "@/components/UI/Grid/EmptyGridPlaceholder.js";
// -----------------------------------------------------------------------------
import UserGridItem from './UserGridItem';
// -----------------------------------------------------------------------------
import styles from "./UserGrid.module.css";


// -----------------------------------------------------------------------------
function UserGrid({ userModel, fetchUsersFunc })
{
  //
  const [users, setUsers] = useState([]);

  //
  useEffect(() => {
    if(fetchUsersFunc) {
      fetchUsersFunc(userModel, setUsers);
    }
  }, [userModel]);

  //
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {
          users.length != 0 &&
          users.map((user) => (
            <UserGridItem
              key={user._id}
              userModel={user}
            />
          ))
        }
      </div>


      {/* There's no users add a placeholder */}
      {
        users.length == 0 &&
          <EmptyGridPlaceholder/>
      }
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserGrid;
