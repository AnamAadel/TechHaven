import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContexts } from '../components/context/AuthContext';


function AllUsers() {
  const loadData = useLoaderData();
  const {loggedInUser, setLoggedInUser} = AuthContexts();
  const [userData, setUserData] = useState(loadData);
  console.log(loadData)

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/users/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      });
      const jsonData = await res.json();
      console.log(jsonData);
      if (jsonData.deletedCount > 0) {
        alert("User deleted successfully!");
      }
      const newUsers = userData.find(item => item._id === id);
      setLoggedInUser(newUsers);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Creation Time</th>
              <th>Last Login Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='font-bold'>
          {loadData?.length > 0 && loadData.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.userImage} alt="User Image" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
              {item.userName}
              </td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.creationTime}</td>
              <td>{item.lastLoginTime}</td>
              <td>{item.status}</td>
              <th className="">
                {item?.products ?
                <Link className="p-4 btn bg-neutral text-white hover:bg-neutral" to={`/users/${item._id}`}>Products</Link> :
                <span>No Products</span>
                }
                
              </th>
            </tr>

          ))}

          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
            <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Creation Time</th>
              <th>Last Login Time</th>
              <th>Status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default AllUsers
