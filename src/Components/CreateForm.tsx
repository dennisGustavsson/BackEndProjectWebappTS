import React from "react";
import { IUserContext, UserContext } from "../Contexts/UserContext";

const CreateForm = () => {
	const { userRequest, setUserRequest, create } = React.useContext(
		UserContext
	) as IUserContext;
	return (
		<>
			<h3> Create User</h3>
			<form onSubmit={create} className='form-theme'>
				<input
					id='reqFirstName'
					value={userRequest.firstName}
					onChange={(e) =>
						setUserRequest({ ...userRequest, firstName: e.target.value })
					}
					type='text'
					placeholder='Enter your first name...'
				/>
				{/* <label htmlFor='reqFirstName'>First Name</label> */}
				<input
					id='reqLastName'
					value={userRequest.lastName}
					onChange={(e) =>
						setUserRequest({ ...userRequest, lastName: e.target.value })
					}
					type='text'
					placeholder='Enter your last name...'
				/>
				{/* <label htmlFor='reqLastName'>Last Name</label> */}
				<input
					id='reqEmail'
					value={userRequest.email}
					onChange={(e) =>
						setUserRequest({ ...userRequest, email: e.target.value })
					}
					type='text'
					placeholder='Enter your email...'
				/>
				{/* <label htmlFor='reqEmail'>Email</label> */}
				<button type='submit' className='btn-theme'>
					Create User
				</button>
			</form>
		</>
	);
};
export default CreateForm;
