import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { ContentContainer, DashboardContainer } from "./styled";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <div>
        <MenuLateral />
        <ContentContainer>
          <h1>Dashboard</h1>
          <div></div>
        </ContentContainer>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
