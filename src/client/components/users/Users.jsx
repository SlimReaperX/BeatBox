import { useGetUsersQuery } from "../../redux/api/userApi";

const Users = () => {
  const { data, isLoading } = useGetUsersQuery();
  console.log(data);
  return (
    <>
      <div className="books">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((itm) => (
            <div key={itm.id}>
              <div>
                <p>{itm.email}</p>
                <p>{itm.password}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Users;
