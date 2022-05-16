import FormAtt from "../../components/FormAttendants/FormAtt";
import Table from "../../components/Table/Table";
import Columm from "../../components/UI/Columm/Columm";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";

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
          {users.map((user) => {
            return (
              <div key={user.id}>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <button onClick={() => deleteUser(user.id)}>Excluir</button>
              </div>
            );
          })}
          <Table />
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
