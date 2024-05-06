// -----------------------------------------------------------------------------
import { useState } from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import App from "@/models/App";


// -----------------------------------------------------------------------------
function CreateUser()
{
  const [file, setFile] = useState(null);

  const handleFileUpload = async (e) => {
    const selected_file = e.target.files[0];
    setFile(selected_file);

    const data = {
      profilePhoto : selected_file
    };

    const result = await App.CreateUserWithData(data);
  };

  return (
    <div>
      <div>
        <span>Username</span>
        <input type="text"></input>
      </div>

      <div>
        <span>Email</span>
        <input type="text"></input>
      </div>

      <div>
        <span>Name</span>
        <input type="text"></input>
      </div>

      <div>
        <span>Photo</span>
        <input type="text"></input>
      </div>

      <div>
        <input type="file" onChange={handleFileUpload} />
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default CreateUser;