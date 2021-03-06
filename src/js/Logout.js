
import React from "react";
import { logout, isLoggedIn } from "./utils/auth";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";

function refreshPage() {
  window.location.reload(false);
}
const Logout = props => {
  const handleLogout = () => {
    logout();
    refreshPage();
    props.hist.push("/");
  };

  return (
    <div>
      <button className="button btn-logout" onClick={() => handleLogout()}>
        Logout <ExitToAppRounded />{" "}
      </button>
    </div>
  );
};

export default Logout;
