import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	// const { loading, logout } = useLogout();

	return (
		<div className='mt-auto p-4'>
				<BiLogOut className='w-6 h-6 text-black cursor-pointer' />
		</div>
	);
};
export default LogoutButton;