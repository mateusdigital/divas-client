
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";

//
// Page Urls
//

// -----------------------------------------------------------------------------
export class PageUrls
{
  static UserOwnProfile     = "/profile";
  static UserLogin          = "/login";
  static UserForgotPassword = "/users/forgot-password";
  static UserSignUp         = "/users/sign-up";

  static UserMessages       = "/users/messages";

  static FeedUser           = "/feed/user";
  static FeedMain           = "/feed/main";

  static DocsHelp      = "doc/help";
  static DocsTerms     = "doc/terms";
  static DocsPrivacy   ="/doc/privacy";
  static DocsCopyright ="/doc/copyright";

  static MoodboardCreate = "/moodboard/create";

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
