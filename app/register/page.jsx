import styles from "@/app/ui/login/login.module.css";
import RegisterForm from "../ui/register/RegisterPage";
import AddUserPage from "../dashboard/users/add/page";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <AddUserPage />
    </div>
  );
};

export default LoginPage;
