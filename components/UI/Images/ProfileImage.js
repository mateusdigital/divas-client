// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import CachedImage from "@/components/UI/Images/CachedImage";
// -----------------------------------------------------------------------------
import { useLoggedUserContext } from "@/components/Logic/UserLogged";
// -----------------------------------------------------------------------------
import styles from "./ProfileImage.module.css";

// -----------------------------------------------------------------------------
function ProfileImage({userModel, className})
{
  if(!userModel) {
    userModel = useLoggedUserContext();
  }

  if(!userModel) {
    return;
  }

  const class_name = className || styles.photoContainer;
  const image_url = NET.Make_Local_Image_Url(userModel.profilePhotoUrl)
  //
  return (<>
    <div className={class_name}>
      <CachedImage className={styles.photoContainerImg} imageUrl={image_url} />
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default ProfileImage;