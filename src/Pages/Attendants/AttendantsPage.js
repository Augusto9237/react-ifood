import FormAtt from "../../components/FormAttendants/FormAtt";
import Columm from "../../components/UI/Columm/Columm";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";
import "./styles.css";

const Attendants = ({
  users,
  name,
  email,
  setName,
  setEmail,
  deleteUser,
  createUser
}) => {
  return (
    <>
      <ContainerHome>
        <Header title="Atendentes"></Header>

        <div className="attendants-container">
          <table className="tableUser">
            <thead className="tableUser-header">
              <tr>
                <td id="idClient">ID</td>
                <td>NOME</td>
                <td>E-MAIL</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => deleteUser(user.id)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContainerHome>
      <Columm>
        <FormAtt
          name={name}
          email={email}
          createUser={createUser}
          setName={setName}
          setEmail={setEmail}
        />
      </Columm>
    </>
  );
};

export default Attendants;
