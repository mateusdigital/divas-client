
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";

//
// Page Urls
//

// -----------------------------------------------------------------------------
export class PageUrls
{
  // User
  static UserOwnProfile     = "/profile";
  static UserOtherProfile   = "/users/:id";
  static UserLogin          = "/login";
  static UserForgotPassword = "/users/forgot-password";
  static UserSignUp         = "/users/sign-up";

  static UserMessages       = "/users/messages";

  //
  static EditProfile = "/edit-profile";

  // Feed
  static FeedUser           = "/feed"
  static Discover           = "/discover"

  // Docs
  static DocsHelp      = "/doc/help";
  static DocsTerms     = "/doc/terms";
  static DocsPrivacy   ="/doc/privacy";
  static DocsCopyright ="/doc/copyright";

  // Moodboard
  static MoodboardCreate  = "/moodboard/create";
  static MoodboardEdit    = "/moodboard/edit/:id";
  static MoodboardDetails = "/moodboard/:id";

  // Sidebar
  static SidebarMore = "/more";
}


//
// Page Router
//

// -----------------------------------------------------------------------------
export function usePageRouter()
{
  const router = useRouter();
  const NavigateTo = (url) => {
    router.push(url);
  };

  return { NavigateTo }
}
