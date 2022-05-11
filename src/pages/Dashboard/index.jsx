import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { ContentContainer, DashboardContainer } from "./styled";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <div className="contentPageContainer">
        <MenuLateral />
        <ContentContainer>
          <h1>Dashboard</h1>
          <div>
            <img
              src="https://www.animatedimages.org/data/media/1664/animated-work-in-progress-image-0011.gif"
              alt="Working"
            />
            <span>Working in progress...</span>
          </div>
        </ContentContainer>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
