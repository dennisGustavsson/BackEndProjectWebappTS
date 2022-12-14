import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import SignInSection from "../Sections/SignInSection"

const LoginView: React.FC = () => {
	return (
		<>
			<MainMenuSection />
			<SignInSection />
			<FooterSection />
		</>
	);
};
export default LoginView