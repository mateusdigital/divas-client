
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// -----------------------------------------------------------------------------
import CreateUser from "@/components/User/Create/CreateUser";


// -----------------------------------------------------------------------------
function ProfilePageForUser()
{
  // Ready...
  return (
    <CreateUser></CreateUser>
  );
}

// -----------------------------------------------------------------------------
export default ProfilePageForUser;
