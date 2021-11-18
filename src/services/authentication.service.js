import { BehaviorSubject } from "rxjs";
import { useHistory } from "react-router-dom";
import { Roles } from "../helpers/roles";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  Login,
  Logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function Login(username, password) {
  let userRole = "Admin";


  // Set user role as per the credentials.
  if (username === "admin@gmail.com" && password === 'admin') {
    userRole = Roles.Admin;
  } else if (username === "user@gmail.com" && password === 'user') {
    userRole = Roles.User;
  } else if (username === "customer@gmail.com") {
    userRole = Roles.Customer;
  }

  console.log("user role: ", userRole);

  const user = { username: username, password:password, role: userRole };

  // Save current user to localstorage.
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Passing current user info to behaviour subject variable so other component can read the details.
  currentUserSubject.next(user);

  //  let history = useHistory();
  console.log("login called");
  //navigate("/dashboard");
}

function Logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
